-- Revoke public execute on rate limit functions so only service role can call them
REVOKE EXECUTE ON FUNCTION public.cleanup_rate_limits() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.check_rate_limit(text, text, integer, integer) FROM anon, authenticated;