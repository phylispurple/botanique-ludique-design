import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

interface BlogTableOfContentsProps {
  items: TOCItem[];
}

const BlogTableOfContents = ({ items }: BlogTableOfContentsProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className="toc-organique not-prose bg-[hsl(var(--cream))] border-brutal shadow-brutal p-6 md:p-8 mb-12 -rotate-[0.4deg]"
      style={{ borderRadius: "40px 54px 34px 60px / 60px 36px 54px 40px" }}
      aria-label="Sommaire"
    >
      <p className="flex items-center gap-2 font-mono-brand text-[10px] uppercase tracking-[2px] text-[hsl(var(--olive))] mb-4">
        <List className="w-4 h-4" />
        Au sommaire
      </p>
      <ol className="space-y-2.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-left w-full text-foreground/80 hover:text-primary transition-colors text-sm md:text-base leading-snug flex items-start gap-3"
            >
              <span
                className="w-6 h-6 flex-shrink-0 flex items-center justify-center font-display text-[11px] bg-foreground text-primary-foreground"
                style={{ borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%" }}
              >
                {index + 1}
              </span>
              <span className="pt-0.5 underline-offset-4 hover:underline">{item.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BlogTableOfContents;
