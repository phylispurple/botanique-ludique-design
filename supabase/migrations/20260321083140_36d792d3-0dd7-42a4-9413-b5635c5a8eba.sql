-- Block anonymous SELECT on rate_limits
CREATE POLICY "Deny anon select on rate_limits"
  ON public.rate_limits
  FOR SELECT
  TO anon
  USING (false);