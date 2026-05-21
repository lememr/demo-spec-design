import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center">
      <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </Card>
  );
}
