import React, { Suspense } from "react";
import SubDashContent from "./subDashContent";

export default function SubDashPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Pass subDashId to SubDashContent */}
      <SubDashContent />
    </Suspense>
  );
}
