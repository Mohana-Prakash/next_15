"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SubDashContent({ subDashId }: { subDashId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || subDashId;
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
