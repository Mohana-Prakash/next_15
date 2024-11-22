import { ReactNode } from "react";
// import ResponsiveSideAndNavBar from "@/components/navSidebar";
import TailwindSideNavbar from "@/components/tailwindSideNavbar";
import Breadcrumb from "@/components/breadCrumbs";

export default function SuperadminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="superadmin-layout">
      {/* <ResponsiveSideAndNavBar>{children}</ResponsiveSideAndNavBar> */}
      <TailwindSideNavbar>
        <Breadcrumb role="admin" />
        <div className="mt-10"> {children}</div>
      </TailwindSideNavbar>
    </div>
  );
}
