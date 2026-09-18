import Sidebar from "@/components/Sidebar";
import MobileTopBar from "@/components/MobileTopBar";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function WithSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout-wrapper">
      <MobileTopBar />
      <div className="sidebar-shell">
        <Sidebar />
      </div>
      <main className="main-content">{children}</main>
      <MobileBottomNav />
    </div>
  );
}

