import { Hero } from "@/components/marketing/Hero";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { Footer } from "@/components/marketing/Footer";
import { Activity, BarChart3, Shield } from "lucide-react";

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
  return (
    <>
      <Hero />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
