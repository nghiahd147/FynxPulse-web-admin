import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "~/components/ui/breadcrumbcustom";

export default function Dashboard() {
  const location = useLocation();

  console.log("location", location);

  return (
    <div className="p-2">
      <h3 className="text-xl">Admin</h3>
      <BreadcrumbWithCustomSeparator location={location.pathname} />
    </div>
  );
}
