import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "~/components/ui/breadcrumbcustom";

export default function Dashboard() {
  const location = useLocation();
  return (
    <div className="p-2">
      <h3 className="text-xl">Dashboard</h3>
      <BreadcrumbWithCustomSeparator pathname={location.pathname} />
    </div>
  );
}
