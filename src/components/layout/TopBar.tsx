"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TopBarProps {
  user: {
    name: string;
    avatar: string;
  };
}

export function TopBar({ user }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-surface/80 backdrop-blur border-b border-border flex items-center justify-between px-6">
      <div className="lg:hidden w-8" />{/* spacer for mobile hamburger */}
      <h1 className="text-sm font-medium text-text-secondary hidden lg:block">
        Painel de Controle
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full border border-border"
          />
          <span className="text-sm text-text-primary hidden sm:inline">{user.name}</span>
        </div>
        <form action="/api/auth/logout" method="POST">
          <Button variant="ghost" className="px-3 py-2">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline ml-2">Sair</span>
          </Button>
        </form>
      </div>
    </header>
  );
}
