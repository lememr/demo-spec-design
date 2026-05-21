import { Button } from "@/components/ui/Button";
import { Github } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight leading-tight">
          Gerencie seus Agentes de IA em um só lugar
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed">
          Acompanhe status, custos e logs de todos os seus agentes de inteligência artificial. Simples, rápido e seguro.
        </p>
        <div className="mt-8">
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
