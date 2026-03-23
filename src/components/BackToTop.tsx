import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

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
      className={`fixed bottom-24 right-6 z-[997] w-10 h-10 rounded-full bg-[hsl(var(--black))]/80 text-[hsl(var(--cream))] flex items-center justify-center backdrop-blur-sm hover:bg-[hsl(var(--olive))] hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Remonter en haut"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
