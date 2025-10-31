import React from 'react';

interface IllustrationProps {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const LeafBranch: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 C30 5, 20 15, 18 25 C16 35, 20 45, 25 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M30 5 C30 5, 40 15, 42 25 C44 35, 40 45, 35 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M25 50 C25 50, 28 60, 30 75" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const Butterfly: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="35" cy="25" rx="15" ry="20" fill="currentColor" opacity="0.15"/>
    <ellipse cx="45" cy="25" rx="15" ry="20" fill="currentColor" opacity="0.15"/>
    <ellipse cx="35" cy="35" rx="10" ry="15" fill="currentColor" opacity="0.15"/>
    <ellipse cx="45" cy="35" rx="10" ry="15" fill="currentColor" opacity="0.15"/>
    <path d="M40 15 L40 45" stroke="currentColor" strokeWidth="2"/>
    <circle cx="40" cy="15" r="3" fill="currentColor"/>
    <path d="M40 15 L35 8 M40 15 L45 8" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const Flower: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="25" r="4" fill="currentColor" opacity="0.3"/>
    <ellipse cx="30" cy="15" rx="6" ry="8" fill="currentColor" opacity="0.15"/>
    <ellipse cx="20" cy="25" rx="6" ry="8" fill="currentColor" opacity="0.15" transform="rotate(-60 20 25)"/>
    <ellipse cx="40" cy="25" rx="6" ry="8" fill="currentColor" opacity="0.15" transform="rotate(60 40 25)"/>
    <ellipse cx="23" cy="32" rx="6" ry="8" fill="currentColor" opacity="0.15" transform="rotate(-120 23 32)"/>
    <ellipse cx="37" cy="32" rx="6" ry="8" fill="currentColor" opacity="0.15" transform="rotate(120 37 32)"/>
    <path d="M30 25 L30 70" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
  </svg>
);

export const Bee: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="25" rx="12" ry="8" fill="currentColor" opacity="0.2"/>
    <path d="M35 25 L37 25 M40 25 L42 25 M45 25 L47 25" stroke="currentColor" strokeWidth="2"/>
    <ellipse cx="30" cy="20" rx="15" ry="8" fill="currentColor" opacity="0.05" transform="rotate(-20 30 20)"/>
    <ellipse cx="30" cy="30" rx="15" ry="8" fill="currentColor" opacity="0.05" transform="rotate(20 30 30)"/>
    <circle cx="50" cy="25" r="4" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const Mushroom: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 35 C15 20, 45 20, 45 35 Z" fill="currentColor" opacity="0.15"/>
    <circle cx="22" cy="28" r="3" fill="currentColor" opacity="0.2"/>
    <circle cx="38" cy="30" r="2" fill="currentColor" opacity="0.2"/>
    <rect x="25" y="35" width="10" height="25" rx="2" fill="currentColor" opacity="0.1"/>
    <path d="M25 35 L35 35" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
);

export const Snail: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <circle cx="40" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M25 30 C20 30, 15 35, 15 42 L20 42" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
    <path d="M20 30 L18 22 M25 30 L23 22" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

export const Bird: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="45" cy="25" rx="10" ry="8" fill="currentColor" opacity="0.15"/>
    <circle cx="52" cy="23" r="2" fill="currentColor" opacity="0.5"/>
    <path d="M35 22 C30 18, 20 18, 15 22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M55 22 C60 18, 70 18, 75 22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M42 30 L42 40 L38 42 L42 40 L46 42 L42 40" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
  </svg>
);

export const Seed: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="25" cy="25" rx="8" ry="12" fill="currentColor" opacity="0.15"/>
    <path d="M25 13 L25 5 L20 8" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <path d="M25 5 L30 8" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

export const Strawberry: React.FC<IllustrationProps> = ({ className, onClick, style }) => (
  <svg className={className} onClick={onClick} style={style} viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 15 C15 15, 10 25, 15 38 C18 45, 22 48, 25 50 C28 48, 32 45, 35 38 C40 25, 35 15, 25 15" fill="currentColor" opacity="0.12"/>
    <circle cx="20" cy="25" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="30" cy="25" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="25" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="22" cy="35" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="28" cy="35" r="1.5" fill="currentColor" opacity="0.3"/>
    <path d="M20 15 L25 12 L30 15" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M18 12 L25 10 L32 12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
  </svg>
);
