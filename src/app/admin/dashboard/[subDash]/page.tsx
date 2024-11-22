"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { successToast, errorToast, infoToast } from "@/components/constant";
import { DefaultButton, GreenButton, RedButton } from "@/components/buttonComp";
import TableComponent from "@/components/tableComponent";
import DateRangePicker from "@/components/dateRangePicker";

export default function SubDashPage() {
    const searchParams = useSearchParams();
    const [dateRange, setDateRange] = useState();
    // const router = useRouter();
    // const id = searchParams.get("id");
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DefaultButton text="Info" clickHandler={() => infoToast("Informed")} />
            <GreenButton text="Save" clickHandler={() => successToast("Saved Successfully")} />
            <RedButton text="Cancel" clickHandler={() => errorToast("Update Cancelled")} />
            <DateRangePicker setDateRange={setDateRange} dateRange={dateRange} />
            <TableComponent />
        </Suspense>
    );
}
