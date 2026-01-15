import { SlashIcon } from "lucide-react";
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({ pathname }: { pathname: string }) {
  const locationBreadcrums = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {locationBreadcrums.map((item, index) => {
          const isHas = index === locationBreadcrums.length - 1;
          const to = "/" + locationBreadcrums.slice(0, index + 1).join("/");
          return (
            <div key={to} className="flex items-center gap-1">
              <BreadcrumbItem>
                {isHas ? (
                  <>
                    <BreadcrumbPage>{item}</BreadcrumbPage>
                  </>
                ) : (
                  <>
                    <BreadcrumbLink asChild>
                      <Link to={to}>{item}</Link>
                    </BreadcrumbLink>
                  </>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
