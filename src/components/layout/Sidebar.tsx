"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Bot, Settings, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/agents", label: "Agentes", icon: Bot },
  { href: "/settings", label: "Configurações", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface border border-border rounded-lg"
        aria-label="Abrir menu"
      >
        <Menu className="w-5 h-5 text-text-primary" />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-60 bg-void border-r border-border flex flex-col transition-transform duration-250",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="px-4 py-6 border-b border-border flex items-center justify-between">
          <span className="font-bold text-text-primary tracking-tight">AgentOS</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-elevated text-text-primary border-l-2 border-accent"
                    : "text-text-secondary hover:bg-elevated hover:text-text-primary"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
