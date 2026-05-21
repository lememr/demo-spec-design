import { getSession } from "@/lib/auth";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { redirect } from "next/navigation";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <DashboardShell
      user={{
        name: session.name,
        avatar: session.avatar,
      }}
    >
      {children}
    </DashboardShell>
  );
}
