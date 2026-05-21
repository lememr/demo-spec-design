import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentOS — Gerencie seus Agentes de IA",
  description: "Painel para acompanhar status, custos e logs de agentes de inteligência artificial.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void flex flex-col">
      <header className="h-16 border-b border-border flex items-center px-6">
        <span className="font-bold text-text-primary tracking-tight">AgentOS</span>
      </header>
      {children}
    </div>
  );
}
