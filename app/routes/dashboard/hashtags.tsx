import { useLocation } from "react-router";
import { BreadcrumbWithCustomSeparator } from "~/components/ui/breadcrumbcustom";

export default function Hashtags() {
  const location = useLocation();
  return (
    <div className="p-2">
      <h3 className="text-xl">Hashtags</h3>
      <BreadcrumbWithCustomSeparator pathname={location.pathname} />
    </div>
  );
}
