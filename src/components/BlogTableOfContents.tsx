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
    <nav className="bg-sand/50 rounded-lg p-6 mb-10 animate-fade-in">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-charcoal mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
        <List className="w-5 h-5 text-sage" />
        Sommaire
      </h2>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-left w-full text-charcoal/70 hover:text-sage transition-colors text-sm leading-relaxed flex items-start gap-2"
            >
              <span className="text-sage font-semibold">{index + 1}.</span>
              <span className="hover:underline">{item.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BlogTableOfContents;
