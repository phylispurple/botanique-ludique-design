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
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
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
              <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you're interested in booking a workshop, organizing a private event,
                or simply want to learn more about our botanical offerings, we'd love to hear from you.
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm uppercase tracking-wider mb-2 text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-sm uppercase tracking-wider mb-2 text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-sans text-sm uppercase tracking-wider mb-2 text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-sm uppercase tracking-wider mb-2 text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-2 text-foreground">Email</h3>
                <a
                  href="mailto:contact@botaniqueludique.com"
                  className="font-sans text-primary hover:text-primary/80 transition-colors"
                >
                  contact@botaniqueludique.com
                </a>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-2 text-foreground">Location</h3>
                <p className="font-sans text-muted-foreground">
                  Paris & surrounding regions
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
