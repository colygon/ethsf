import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 rounded-tag text-xs font-medium font-[family-name:var(--font-mono)]",
  {
    variants: {
      variant: {
        default: "bg-accent/15 text-accent",
        accent: "bg-accent/15 text-accent",
        alt: "bg-accent-alt/15 text-accent-alt",
        warm: "bg-accent-warm/15 text-accent-warm",
        outline: "border border-border text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}
