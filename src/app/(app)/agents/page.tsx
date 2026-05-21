import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Play, Square, Settings } from "lucide-react";

const agents = [
  { id: 1, name: "Agente Alpha", status: "online" as const, lastRun: "2 min atrás", cost: "$ 1.20" },
  { id: 2, name: "Agente Beta", status: "erro" as const, lastRun: "15 min atrás", cost: "$ 0.45" },
  { id: 3, name: "Agente Gamma", status: "offline" as const, lastRun: "1h atrás", cost: "$ 0.00" },
  { id: 4, name: "Agente Delta", status: "online" as const, lastRun: "5 min atrás", cost: "$ 0.89" },
  { id: 5, name: "Agente Epsilon", status: "online" as const, lastRun: "10 min atrás", cost: "$ 1.12" },
  { id: 6, name: "Agente Zeta", status: "offline" as const, lastRun: "3h atrás", cost: "$ 0.00" },
];

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-text-primary">Agentes</h2>
        <Button variant="primary">+ Novo Agente</Button>
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-text-muted">Nome</th>
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-text-muted">Status</th>
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-text-muted">Última Execução</th>
              <th className="pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-text-muted">Custo</th>
              <th className="pb-3 text-xs font-medium uppercase tracking-wider text-text-muted text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {agents.map((agent) => (
              <tr key={agent.id} className="group hover:bg-elevated/50 transition-colors">
                <td className="py-4 pr-4 text-sm font-medium text-text-primary">{agent.name}</td>
                <td className="py-4 pr-4"><Badge status={agent.status} /></td>
                <td className="py-4 pr-4 text-sm text-text-secondary">{agent.lastRun}</td>
                <td className="py-4 pr-4 text-sm font-mono text-text-secondary">{agent.cost}</td>
                <td className="py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" className="px-2 py-1">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" className="px-2 py-1">
                      <Square className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" className="px-2 py-1">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
