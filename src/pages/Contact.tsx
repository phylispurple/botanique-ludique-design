import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    // Ici, on enverrait normalement les données du formulaire vers un backend
    toast({
      title: "Message envoyé !",
      description: "Nous revenons vers vous très vite.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-earth py-24 text-off-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-10 left-12 h-48 w-48 rounded-full bg-sage/40 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-sand/30 blur-3xl" />
          </div>
          <div className="container relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center md:px-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-off-white/10 px-6 py-2 font-sans text-xs uppercase tracking-[0.4em] text-off-white/80">
              Contact
            </span>
            <h1 className="font-serif text-4xl font-light leading-tight md:text-6xl">
              Imaginons ensemble votre expérience végétale
            </h1>
            <p className="font-sans text-lg leading-relaxed text-off-white/80">
              Un atelier sur-mesure, un événement privé, une intervention pédagogique ou une simple question ? Vanessa vous répond avec attention.
            </p>
          </div>
        </section>

        <section className="relative -mt-16 pb-24">
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-sage/20 bg-off-white p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/70">
                        Nom et prénom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-sage/30 bg-white px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/70">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-sage/30 bg-white px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/60"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/70">
                      Objet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-sage/30 bg-white px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/60"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/70">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-xl border border-sage/30 bg-white px-4 py-3 font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/60"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-earth px-8 py-4 font-sans text-sm uppercase tracking-[0.4em] text-off-white transition-all hover:scale-105 hover:bg-earth/90"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-between gap-10 rounded-3xl border border-sage/20 bg-sand/60 p-10 text-charcoal shadow-2xl">
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl font-light">Informations pratiques</h2>
                  <p className="font-sans text-base leading-relaxed text-charcoal/80">
                    Partagez vos envies, le nombre de participant·es ou le contexte de votre événement. Nous co-construisons une proposition adaptée à vos besoins.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/60">Email</h3>
                    <a
                      href="mailto:contact@botaniqueludique.com"
                      className="mt-2 inline-flex items-center gap-2 font-sans text-lg text-earth transition-colors hover:text-earth/80"
                    >
                      contact@botaniqueludique.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/60">Territoire</h3>
                    <p className="mt-2 font-sans text-base text-charcoal/80">
                      Île-de-France & déplacements en régions sur demande
                    </p>
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-[0.35em] text-charcoal/60">Réseaux</h3>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 font-sans text-base text-charcoal/80 transition-colors hover:text-earth"
                    >
                      @botaniqueludique
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
