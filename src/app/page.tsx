"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SubDash() {
    const router = useRouter();

    // useEffect(() => {
    //   router.push("/login");
    // }, [router]);

    return (
        <div>
            <h1 onClick={() => router.push("/admin/dashboard")}>
                You need to log in to access this page
            </h1>
            <Link href="/api-docs">Go to API Docs</Link>
        </div>
    );
}
