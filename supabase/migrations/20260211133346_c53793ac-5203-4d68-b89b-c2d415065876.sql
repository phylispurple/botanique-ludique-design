-- Drop the overly permissive INSERT policy
DROP POLICY "Anyone can submit testimonials" ON public.testimonials;

-- Create a tighter INSERT policy: anyone can submit but approved must default to false
CREATE POLICY "Anyone can submit testimonials"
ON public.testimonials
FOR INSERT
TO public
WITH CHECK (approved = false);