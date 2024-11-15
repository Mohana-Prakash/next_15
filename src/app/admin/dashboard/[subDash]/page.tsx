import React, { Suspense } from "react";
import SubDashContent from "./subDashContent";

interface SubDashPageProps {
  params: { subDash: string };
}

export default function SubDashPage({ params }: SubDashPageProps) {
  return (
    <Suspense fallback={<div>Loading SubDash...</div>}>
      <SubDashContent subDashId={params.subDash} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [{ subDash: "subDash" }];
}
