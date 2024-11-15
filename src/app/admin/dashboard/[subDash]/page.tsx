import React, { Suspense } from "react";
import SubDashContent from "./subDashContent";

export default function SubDashPage({
  params,
}: Readonly<{
  params: { subDash: string };
}>) {
  return (
    <Suspense fallback={<div>Loading SubDash...</div>}>
      <SubDashContent subDashId={params.subDash} />
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [{ subDash: "subDash" }];
}
