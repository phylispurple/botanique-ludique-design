-- Create rate_limits table to track requests per IP
CREATE TABLE public.rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create unique index for IP + endpoint combination
CREATE UNIQUE INDEX idx_rate_limits_ip_endpoint ON public.rate_limits(ip_address, endpoint);

-- Create index for cleanup queries
CREATE INDEX idx_rate_limits_window_start ON public.rate_limits(window_start);

-- Enable RLS (but allow edge functions with service role to bypass)
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- No public access - only service role can access this table
-- Edge functions use service role key

-- Function to check and update rate limit
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip_address TEXT,
  p_endpoint TEXT,
  p_max_requests INTEGER DEFAULT 5,
  p_window_minutes INTEGER DEFAULT 60
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_current_count INTEGER;
  v_window_start TIMESTAMP WITH TIME ZONE;
BEGIN
  -- Get current window start (beginning of the hour window)
  v_window_start := date_trunc('hour', now());
  
  -- Try to insert or update the rate limit record
  INSERT INTO public.rate_limits (ip_address, endpoint, request_count, window_start)
  VALUES (p_ip_address, p_endpoint, 1, v_window_start)
  ON CONFLICT (ip_address, endpoint)
  DO UPDATE SET
    request_count = CASE
      WHEN rate_limits.window_start < v_window_start THEN 1
      ELSE rate_limits.request_count + 1
    END,
    window_start = CASE
      WHEN rate_limits.window_start < v_window_start THEN v_window_start
      ELSE rate_limits.window_start
    END
  RETURNING request_count INTO v_current_count;
  
  -- Return true if within limit, false if exceeded
  RETURN v_current_count <= p_max_requests;
END;
$$;

-- Cleanup function to remove old rate limit records (run periodically)
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.rate_limits
  WHERE window_start < now() - INTERVAL '2 hours';
END;
$$;