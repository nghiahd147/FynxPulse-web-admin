import { SidebarTrigger } from "~/components/ui/sidebar";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full h-12 bg-gray-100">
      <SidebarTrigger />
      <span className="pr-6">user</span>
    </div>
  );
}
