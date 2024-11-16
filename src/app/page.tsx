"use client"
import { useRouter } from "next/navigation";

export default function SubDash() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/login");
  // }, [router]);

  return (
    <div>
      <h1 onClick={()=>router.push("/admin/dashboard")}>You need to log in to access this page</h1>
    </div>
  );
}
