"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const navigateToSubDash = () => {
    router.push(`/admin/dashboard/subDash?id=${"1"}`);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={navigateToSubDash}>Go to SubDash</button>
    </div>
  );
}
