"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // anime.js — footer elements aparecem suavemente
    const links = footerRef.current.querySelectorAll("a, p");
    animate(links, {
      opacity: [0, 0.7],
      y: [10, 0],
      duration: 500,
      delay: stagger(80),
      ease: "outQuad",
    });
  }, []);

  return (
    <footer ref={footerRef} className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} AgentOS. Código aberto no{" "}
          <a
            href="https://github.com/lememr/agentos"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
