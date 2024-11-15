// app/admin/dashboard/subDash/page.tsx
"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SubDashPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = searchParams.get("id");

  console.log(id, pathname);

  return (
    <div>
      <h1>Sub Dashboard</h1>
      {id ? (
        <p onClick={() => router.back()}>Sub Dashboard ID: {id}</p>
      ) : (
        <p>No ID specified</p>
      )}
    </div>
  );
}
