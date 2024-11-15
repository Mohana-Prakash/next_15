import { ReactNode } from "react";
import ResponsiveSideAndNavBar from "@/components/navSidebar";

export default function SuperadminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="superadmin-layout">
      <ResponsiveSideAndNavBar>{children}</ResponsiveSideAndNavBar>
    </div>
  );
}
