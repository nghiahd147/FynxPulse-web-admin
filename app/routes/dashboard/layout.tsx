import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/ui/app-sidebar";
import { Outlet } from "react-router";
import Header from "~/components/layout/Header/Header";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
