import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "default" | "meetup" | "ddd" | "vibe" | "hackathon" | "workshop" | "social";
  hover?: boolean;
}

const accentClasses: Record<string, string> = {
  default: "ethsf-card-accent-meetup",
  meetup: "ethsf-card-accent-meetup",
  ddd: "ethsf-card-accent-ddd",
  vibe: "ethsf-card-accent-vibe",
  hackathon: "ethsf-card-accent-hackathon",
  workshop: "ethsf-card-accent-workshop",
  social: "ethsf-card-accent-social",
};

export function Card({ children, className, accent, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "ethsf-card",
        !hover && "[&]:hover:border-[var(--th-border)] [&]:hover:shadow-[var(--th-card-shadow)]",
        accent && accentClasses[accent],
        className
      )}
    >
      {children}
    </div>
  );
}
