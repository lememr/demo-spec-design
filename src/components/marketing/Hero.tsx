"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Github } from "lucide-react";
import Typed from "typed.js";
import { animate } from "animejs";

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // typed.js — headline digitando letra por letra
    const typed = new Typed(typedRef.current!, {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: false, // cursor customizado via CSS
      onComplete: () => {
        // anime.js — subtitle fade-in suave quando typed completa primeiro loop
        if (subtitleRef.current) {
          animate(subtitleRef.current, {
            opacity: [0, 1],
            y: [10, 0],
            duration: 800,
            ease: "outQuad",
          });
        }
      },
    });

    // anime.js — CTA pulse sutil para chamar atenção
    if (ctaRef.current) {
      animate(ctaRef.current, {
        scale: [1, 1.03],
        duration: 1200,
        ease: "inOutSine",
        loop: true,
        alternate: true,
      });
    }

    // anime.js — cursor piscando (simula cursor de terminal)
    if (cursorRef.current) {
      animate(cursorRef.current, {
        opacity: [1, 0],
        duration: 500,
        ease: "step",
        loop: true,
        alternate: true,
      });
    }

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        {/* SEO: strings reais no HTML para bots */}
        <div id="typed-strings" className="hidden">
          <p>Gerencie seus Agentes de IA</p>
          <p>Automatize tarefas repetitivas</p>
          <p>Reduza custos de API</p>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight leading-tight min-h-[3.5rem]">
          <span ref={typedRef} />
          <span ref={cursorRef} className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle" />
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed opacity-0"
        >
          Acompanhe status, custos e logs de todos os seus agentes de inteligência artificial.
          Simples, rápido e seguro.
        </p>

        <div ref={ctaRef} className="mt-8 inline-block">
          <a href="/api/auth/login">
            <Button className="gap-2">
              <Github className="w-5 h-5" />
              Entrar com GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
