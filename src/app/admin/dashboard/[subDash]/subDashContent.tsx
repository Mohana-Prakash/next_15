"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SubDashContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Use query parameter if present, otherwise fallback to subDashId
  const id = searchParams.get("id");

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
