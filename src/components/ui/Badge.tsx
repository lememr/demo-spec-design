import { cn } from "@/lib/utils";

interface BadgeProps {
  status: "online" | "offline" | "erro";
}

export function Badge({ status }: BadgeProps) {
  const map = {
    online: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/20",
      label: "Online",
    },
    offline: {
      bg: "bg-text-muted/10",
      text: "text-text-muted",
      border: "border-text-muted/20",
      label: "Offline",
    },
    erro: {
      bg: "bg-danger/10",
      text: "text-danger",
      border: "border-danger/20",
      label: "Erro",
    },
  };

  const s = map[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        s.bg,
        s.text,
        s.border
      )}
    >
      {s.label}
    </span>
  );
}
