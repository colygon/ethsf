import { type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:opacity-90 shadow-sm",
        secondary:
          "bg-surface text-primary border border-border hover:border-accent/60 hover:text-accent",
        ghost:
          "text-secondary hover:text-primary hover:bg-surface",
        outline:
          "border border-accent text-accent hover:bg-accent hover:text-white",
      },
      size: {
        default: "h-10 px-5 py-2 rounded-card",
        sm: "h-8 px-3 text-xs rounded-card",
        lg: "h-12 px-8 text-base rounded-card",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
