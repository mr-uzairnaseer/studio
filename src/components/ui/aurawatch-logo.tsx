"use client";

import Link from 'next/link';
import { ShieldCheck } from 'lucide-react'; // Or any other suitable icon

interface AuraWatchLogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

export function AuraWatchLogo({ className, iconSize = 28, textSize = "text-2xl" }: AuraWatchLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <ShieldCheck size={iconSize} className="text-primary group-hover:text-primary/80 transition-colors" />
      <span className={`font-bold ${textSize} tracking-tight text-foreground group-hover:text-foreground/80 transition-colors`}>
        AuraWatch
      </span>
    </Link>
  );
}
