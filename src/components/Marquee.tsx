interface MarqueeProps {
  items: string[];
  color?: 'green' | 'black' | 'purple' | 'orange' | 'olive' | 'blue';
  speed?: number;
  separator?: string;
}

const colorMap: Record<string, string> = {
  green: 'bg-[hsl(var(--green))]',
  black: 'bg-[hsl(var(--black))]',
  purple: 'bg-[hsl(var(--purple))]',
  orange: 'bg-[hsl(var(--orange))]',
  olive: 'bg-[hsl(var(--olive))]',
  blue: 'bg-[hsl(var(--blue))]',
};

const Marquee = ({ items, color = 'green', speed = 30, separator = '✦' }: MarqueeProps) => {
  const bgClass = colorMap[color] || colorMap.green;
  
  const content = items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-8 px-8">
      <span className="font-display text-2xl md:text-[32px] uppercase tracking-[3px]">
        {item}
      </span>
      <span className="text-xl opacity-70">{separator}</span>
    </span>
  ));

  return (
    <div 
      className={`${bgClass} text-[hsl(var(--cream))] py-5 overflow-hidden whitespace-nowrap select-none`}
      aria-hidden="true"
    >
      <div 
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
