import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Check, X, RefreshCw } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  workshop: string;
  approved: boolean;
  created_at: string;
}

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
    fetchTestimonials();
    
    // Subscribe to realtime changes
    const channel = supabase
      .channel('testimonials-admin')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'testimonials'
        },
        () => {
          fetchTestimonials();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Accès refusé",
        description: "Vous devez être connecté pour accéder à cette page.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();

    if (!roles) {
      toast({
        title: "Accès refusé",
        description: "Vous n'avez pas les permissions administrateur.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
  };

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les témoignages.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ approved: true })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Témoignage approuvé",
        description: "Le témoignage est maintenant visible sur le site.",
      });
    } catch (error) {
      console.error('Error approving testimonial:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'approuver le témoignage.",
        variant: "destructive",
      });
    }
  };

  const handleDisapprove = async (id: string) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ approved: false })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Témoignage désapprouvé",
        description: "Le témoignage n'est plus visible sur le site.",
      });
    } catch (error) {
      console.error('Error disapproving testimonial:', error);
      toast({
        title: "Erreur",
        description: "Impossible de désapprouver le témoignage.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce témoignage ?")) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Témoignage supprimé",
        description: "Le témoignage a été supprimé définitivement.",
      });
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le témoignage.",
        variant: "destructive",
      });
    }
  };

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
          <Badge variant={testimonial.approved ? "default" : "secondary"}>
            {testimonial.approved ? "Approuvé" : "En attente"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Atelier</p>
          <p>{testimonial.workshop}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground">Note</p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating
                    ? "fill-primary text-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-muted-foreground">Commentaire</p>
          <p className="text-sm mt-1">{testimonial.content}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">
            Soumis le {new Date(testimonial.created_at).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>

        <div className="flex gap-2 pt-4">
          {testimonial.approved ? (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDisapprove(testimonial.id)}
                className="flex-1"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Désapprouver
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(testimonial.id)}
                className="flex-1"
              >
                <X className="h-4 w-4 mr-2" />
                Supprimer
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleApprove(testimonial.id)}
                className="flex-1"
              >
                <Check className="h-4 w-4 mr-2" />
                Approuver
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(testimonial.id)}
                className="flex-1"
              >
                <X className="h-4 w-4 mr-2" />
                Rejeter
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (!isAdmin || isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground">Chargement...</p>
      </div>
    );
  }

  const pendingTestimonials = testimonials.filter(t => !t.approved);
  const approvedTestimonials = testimonials.filter(t => t.approved);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Modération des témoignages</h1>
          <p className="text-muted-foreground">
            Gérez les témoignages soumis par les visiteurs
          </p>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">
              En attente ({pendingTestimonials.length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approuvés ({approvedTestimonials.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            {pendingTestimonials.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Aucun témoignage en attente de modération
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {pendingTestimonials.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="approved">
            {approvedTestimonials.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Aucun témoignage approuvé
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {approvedTestimonials.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminTestimonials;