import DashboardLayout from "@/components/dashboard/dashboard-sidebar";

export default function JournalDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DashboardLayout />
      <div>{children}</div>
    </div>
  );
}
