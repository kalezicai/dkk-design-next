import type { SVGProps } from "react";

type IconType = "branding" | "prepress" | "web" | "marketing" | "print" | "addons";

export function getCategoryIcon(id: IconType, className?: string) {
  const props: SVGProps<SVGSVGElement> = {
    className,
    viewBox: "0 0 80 80",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (id) {
    case "branding":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="72" height="72" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="52" cy="28" r="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="52" r="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="28" y1="28" x2="40" y2="52" stroke="currentColor" strokeWidth="1" />
          <line x1="52" y1="28" x2="40" y2="52" stroke="currentColor" strokeWidth="1" />
          <line x1="28" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "prepress":
      return (
        <svg {...props}>
          <rect x="8" y="12" width="64" height="56" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="18" width="52" height="44" rx="1" stroke="currentColor" strokeWidth="1" />
          <line x1="14" y1="30" x2="66" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="14" y1="42" x2="66" y2="42" stroke="currentColor" strokeWidth="1" />
          <line x1="14" y1="54" x2="66" y2="54" stroke="currentColor" strokeWidth="1" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
          <circle cx="32" cy="24" r="2" fill="currentColor" />
        </svg>
      );
    case "web":
      return (
        <svg {...props}>
          <rect x="6" y="10" width="68" height="60" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="24" x2="74" y2="24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="18" r="2" fill="currentColor" />
          <circle cx="22" cy="18" r="2" fill="currentColor" />
          <circle cx="30" cy="18" r="2" fill="currentColor" />
          <rect x="18" y="34" width="44" height="26" rx="1" stroke="currentColor" strokeWidth="1" />
          <line x1="18" y1="42" x2="62" y2="42" stroke="currentColor" strokeWidth="1" />
          <line x1="18" y1="50" x2="62" y2="50" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...props}>
          <path d="M8 62 L8 28 L28 28 L28 62 Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M34 62 L34 18 L52 18 L52 62 Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M58 62 L58 10 L72 10 L72 62 Z" stroke="currentColor" strokeWidth="1.5" />
          <line x1="8" y1="70" x2="72" y2="70" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="3" fill="currentColor" />
          <circle cx="43" cy="12" r="3" fill="currentColor" />
          <circle cx="65" cy="6" r="3" fill="currentColor" />
        </svg>
      );
    case "print":
      return (
        <svg {...props}>
          <rect x="14" y="8" width="52" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="18" y="12" width="44" height="28" rx="1" stroke="currentColor" strokeWidth="1" />
          <line x1="18" y1="22" x2="62" y2="22" stroke="currentColor" strokeWidth="1" />
          <line x1="18" y1="30" x2="62" y2="30" stroke="currentColor" strokeWidth="1" />
          <rect x="22" y="48" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <line x1="22" y1="58" x2="58" y2="58" stroke="currentColor" strokeWidth="1" />
          <line x1="22" y1="66" x2="58" y2="66" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "addons":
      return (
        <svg {...props}>
          <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.5" />
          <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
