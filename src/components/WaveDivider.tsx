const WaveDivider = ({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) => (
  <div className="relative h-12 md:h-20 -mt-px" style={{ backgroundColor: from }}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`absolute bottom-0 left-0 w-full h-full ${flip ? 'scale-x-[-1]' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M0,120 C240,40 480,20 720,50 C960,80 1200,30 1440,120 L1440,120 L0,120 Z"
        fill={to}
      />
    </svg>
  </div>
);

export default WaveDivider;
