import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-xl p-6 transition-all duration-200 hover:border-accent/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
