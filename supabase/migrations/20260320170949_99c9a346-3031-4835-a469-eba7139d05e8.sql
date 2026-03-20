
-- Restrict INSERT on user_roles to admins only
CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Restrict UPDATE on user_roles to admins only
CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Restrict DELETE on user_roles to admins only
CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Restrict SELECT on rate_limits to admins only
CREATE POLICY "Only admins can view rate limits"
ON public.rate_limits
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
