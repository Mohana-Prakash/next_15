"use client";

import React, { Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SubDashPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = searchParams.get("id");

  console.log(id, pathname);

  return (
    <Suspense fallback={<div>Loading SubDash...</div>}>
      <div>
        <h1>Sub Dashboard</h1>

        {id ? (
          <p onClick={() => router.back()}>Sub Dashboard ID: {id}</p>
        ) : (
          <p>No ID specified</p>
        )}
      </div>
    </Suspense>
  );
}
