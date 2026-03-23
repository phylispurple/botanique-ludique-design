import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[997] w-12 h-12 border-brutal bg-[hsl(var(--olive))] text-[hsl(var(--cream))] flex items-center justify-center shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Remonter en haut"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
