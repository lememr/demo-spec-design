"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/marketing/Hero";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { Footer } from "@/components/marketing/Footer";
import { Activity, BarChart3, Shield } from "lucide-react";
import { animate, stagger } from "animejs";

const features = [
  {
    icon: Activity,
    title: "Monitoramento em Tempo Real",
    description: "Acompanhe o status de todos os seus agentes de IA em um único painel. Online, offline ou erro — tudo visível.",
  },
  {
    icon: BarChart3,
    title: "Controle de Custos",
    description: "Visualize gastos por agente, por dia e por provedor. Configure alertas quando o budget ultrapassar o limite.",
  },
  {
    icon: Shield,
    title: "Segurança e Auditoria",
    description: "Todo acesso e toda ação é logada. Saiba exatamente quem fez o quê e quando, com cadeia de assinatura criptográfica.",
  },
];

export default function HomePage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // anime.js — section title fade-in
    const title = sectionRef.current.querySelector("h2");
    if (title) {
      animate(title, {
        opacity: [0, 1],
        y: [15, 0],
        duration: 600,
        ease: "outQuad",
        delay: 200,
      });
    }
  }, []);

  return (
    <>
      <Hero />

      <section ref={sectionRef} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary text-center mb-12 opacity-0">
            O que você pode fazer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
