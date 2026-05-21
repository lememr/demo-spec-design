import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface DashboardShellProps {
  user: {
    name: string;
    avatar: string;
  };
  children: React.ReactNode;
}

export function DashboardShell({ user, children }: DashboardShellProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-void">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar user={user} />
        <main className="flex-1 overflow-y-auto p-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
