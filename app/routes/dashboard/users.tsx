import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "~/components/ui/breadcrumbcustom";

export default function Users() {
  const location = useLocation();
  return (
    <div className="p-2">
      <h3 className="text-xl">Users</h3>
      <BreadcrumbWithCustomSeparator pathname={location.pathname} />
    </div>
  );
}
