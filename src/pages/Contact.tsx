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
        title: "Veuillez remplir tous les champs requis",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons bientôt.",
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

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-charcoal">
                Nous contacter
              </h1>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Que vous souhaitiez réserver un atelier, organiser un événement privé,
                ou simplement en savoir plus sur nos offres botaniques, nous serions ravis d'échanger avec vous.
              </p>
            </div>

            <div className="bg-sand rounded-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-off-white border border-sage/30 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-off-white border border-sage/30 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-off-white border border-sage/30 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sage transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-off-white border border-sage/30 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-sage transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-sage hover:bg-sage-dark text-off-white font-semibold text-sm uppercase tracking-wider transition-colors rounded-full"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">Email</h3>
                <a
                  href="mailto:botaniqueludique@gmail.com"
                  className="text-sage hover:text-sage-dark transition-colors"
                >
                  botaniqueludique@gmail.com
                </a>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-charcoal font-semibold">Localisation</h3>
                <p className="text-charcoal/80">
                  Paris et régions environnantes
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
