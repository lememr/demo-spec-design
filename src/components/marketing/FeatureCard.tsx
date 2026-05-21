"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let srInstance: any;

    const init = async () => {
      const [{ default: ScrollReveal }, { animate }] = await Promise.all([
        import("scrollreveal"),
        import("animejs"),
      ]);

      if (!cardRef.current) return;

      // scrollreveal — card aparece ao entrar na viewport
      srInstance = ScrollReveal({
        origin: "bottom",
        distance: "30px",
        duration: 700,
        delay: delay,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        viewFactor: 0.2,
        reset: false,
      });

      srInstance.reveal(cardRef.current);

      // anime.js — stagger no hover: icone gira levemente
      const card = cardRef.current;
      const iconEl = iconRef.current;
      if (iconEl) {
        const enter = () => {
          animate(iconEl, {
            rotate: [0, 10, -10, 0],
            duration: 400,
            ease: "inOutSine",
          });
        };
        card.addEventListener("mouseenter", enter);
        return () => {
          card.removeEventListener("mouseenter", enter);
          if (srInstance) srInstance.destroy();
        };
      }
    };

    init();

    return () => {
      if (srInstance) srInstance.destroy();
    };
  }, [delay]);

  return (
    <div ref={cardRef}>
      <Card className="text-center h-full">
        <div ref={iconRef} className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-4">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </Card>
    </div>
  );
}
