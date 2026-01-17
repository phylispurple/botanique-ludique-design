import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react";
import { useState } from "react";

interface BlogShareButtonsProps {
  title: string;
  url: string;
}

const BlogShareButtons = ({ title, url }: BlogShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  
  const fullUrl = `https://www.botanique-ludique.fr${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-charcoal/60 hidden sm:inline">Partager :</span>
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-charcoal/10 text-charcoal/70 hover:text-charcoal transition-colors"
        aria-label="Partager sur Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-[#0077B5]/10 text-charcoal/70 hover:text-[#0077B5] transition-colors"
        aria-label="Partager sur LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-[#1877F2]/10 text-charcoal/70 hover:text-[#1877F2] transition-colors"
        aria-label="Partager sur Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
      
      <button
        onClick={copyToClipboard}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-sage/10 text-charcoal/70 hover:text-sage transition-colors"
        aria-label="Copier le lien"
      >
        {copied ? <Check className="w-4 h-4 text-sage" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default BlogShareButtons;
