import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Bot, DollarSign, Clock, Zap } from "lucide-react";

const summary = [
  {
    label: "Total de Agentes",
    value: "12",
    icon: Bot,
    accent: false,
  },
  {
    label: "Agentes Ativos",
    value: "8",
    icon: Zap,
    accent: true,
  },
  {
    label: "Custo Hoje",
    value: "$ 4.23",
    icon: DollarSign,
    accent: false,
  },
  {
    label: "Última Execução",
    value: "2 min atrás",
    icon: Clock,
    accent: false,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-text-primary">Visão Geral</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summary.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className={item.accent ? "text-accent" : "text-text-muted"}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {item.label}
                </span>
              </div>
              <span className="text-2xl font-bold text-text-primary">{item.value}</span>
            </Card>
          );
        })}
      </div>

      <div className="pt-4">
        <Card>
          <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted mb-4">
            Status dos Agentes
          </h3>
          <div className="space-y-3">
            {[
              { name: "Agente Alpha", status: "online" as const, task: "Processando emails" },
              { name: "Agente Beta", status: "erro" as const, task: "Falha na API externa" },
              { name: "Agente Gamma", status: "offline" as const, task: "Agendado para 14:00" },
              { name: "Agente Delta", status: "online" as const, task: "Gerando relatório" },
            ].map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-text-primary">{agent.name}</span>
                  <Badge status={agent.status} />
                </div>
                <span className="text-sm text-text-secondary">{agent.task}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
