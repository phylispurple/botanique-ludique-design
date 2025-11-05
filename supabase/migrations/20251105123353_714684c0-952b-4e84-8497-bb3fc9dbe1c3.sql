-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (user_id::text = (SELECT auth.uid()::text));

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Update testimonials RLS policies for admin access
CREATE POLICY "Admins can update testimonials"
ON public.testimonials
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete testimonials"
ON public.testimonials
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to view all testimonials (including unapproved)
CREATE POLICY "Admins can view all testimonials"
ON public.testimonials
FOR SELECT
USING (
  public.has_role(auth.uid(), 'admin') OR 
  approved = true
);

-- Enable realtime for testimonials
ALTER PUBLICATION supabase_realtime ADD TABLE public.testimonials;