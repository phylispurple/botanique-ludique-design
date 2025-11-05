-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  workshop TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert a testimonial (but it will be unapproved by default)
CREATE POLICY "Anyone can submit testimonials"
  ON public.testimonials
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only approved testimonials are viewable by everyone
CREATE POLICY "Approved testimonials are viewable by everyone"
  ON public.testimonials
  FOR SELECT
  USING (approved = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON public.testimonials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert existing testimonials as approved
INSERT INTO public.testimonials (name, role, content, rating, workshop, approved) VALUES
  ('Sophie M.', 'Professeure des écoles', 'Les ateliers de Vanessa ont transformé notre approche pédagogique. Mes élèves ont découvert l''ethnobotanique de manière ludique et créative. Un vrai succès !', 5, 'Bombes de graines', true),
  ('Camille D.', 'Animatrice MJC', 'Une approche professionnelle et passionnante. Vanessa sait transmettre son savoir avec pédagogie. Les participants repartent enrichis culturellement et créativement.', 5, 'Teinture végétale', true),
  ('Jean-Marc L.', 'Responsable RSE', 'Nous avons organisé plusieurs ateliers pour nos équipes. L''alliance entre art et botanique a créé une dynamique formidable. Une expérience mémorable !', 5, 'Kokedama', true),
  ('Marie R.', 'Particulière', 'J''ai participé à l''atelier terrarium et j''ai adoré ! Au-delà de la création, j''ai appris tant de choses sur les plantes et leurs usages traditionnels.', 5, 'Terrarium', true),
  ('Thomas B.', 'Directeur d''établissement', 'Le parcours de sensibilisation sur les espèces exotiques envahissantes en collège a été un véritable succès pédagogique. Les élèves ont été captivés par cette approche concrète et engagée.', 5, 'Sensibilisation EEE', true),
  ('Élise M.', 'Animatrice senior', 'Les résidents ont été ravis de l''atelier couronnes de fleurs. Vanessa a su adapter le contenu avec bienveillance et expertise. Merci !', 5, 'Couronnes de fleurs', true);