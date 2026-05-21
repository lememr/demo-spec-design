"use client";

import { tokens } from "@/lib/design";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-void disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-accent text-void hover:bg-accent-hover hover:scale-[1.02] px-6 py-2.5",
      ghost:
        "bg-transparent border border-border text-text-primary hover:bg-elevated px-6 py-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        style={{ transitionTimingFunction: tokens.transitions.fast }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
