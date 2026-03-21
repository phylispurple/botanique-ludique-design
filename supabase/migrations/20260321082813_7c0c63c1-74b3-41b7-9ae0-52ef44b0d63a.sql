-- Block all direct writes to rate_limits for non-service-role users
-- Inserts are handled by check_rate_limit SECURITY DEFINER function

-- Deny INSERT for all authenticated/public users (service role bypasses RLS)
CREATE POLICY "Deny direct inserts to rate_limits"
  ON public.rate_limits
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "Deny anon inserts to rate_limits"
  ON public.rate_limits
  FOR INSERT
  TO anon
  WITH CHECK (false);

-- Deny UPDATE
CREATE POLICY "Deny direct updates to rate_limits"
  ON public.rate_limits
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny anon updates to rate_limits"
  ON public.rate_limits
  FOR UPDATE
  TO anon
  USING (false)
  WITH CHECK (false);

-- Deny DELETE
CREATE POLICY "Deny direct deletes to rate_limits"
  ON public.rate_limits
  FOR DELETE
  TO authenticated
  USING (false);

CREATE POLICY "Deny anon deletes to rate_limits"
  ON public.rate_limits
  FOR DELETE
  TO anon
  USING (false);