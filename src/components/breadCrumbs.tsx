"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import HomeIcon from "@mui/icons-material/Home";

interface BreadCrumbProps {
  role: string;
}

const Breadcrumb = ({ role }: BreadCrumbProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client rendering
  }, []);

  const pathArray = pathname
    .split("/")
    .filter((path) => path)
    .slice(1);

  return (
    pathArray?.length > 1 && (
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {/* Home Link */}
          {/* <li>
          <div className="flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              <HomeIcon
                style={{ fontSize: "20px", color: "grey", fontWeight: "bold" }}
              />
            </Link>
          </div>
        </li> */}

          {/* Dynamic Breadcrumbs */}
          {pathArray.map((path, index) => {
            const href = `/${role}/` + pathArray.slice(0, index + 1).join("/");
            const name = path
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <li key={href}>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden={isClient ? "true" : undefined}>
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {index === pathArray.length - 1 ? (
                    <span className="ml-1 text-base text-green-400 md:ml-2">
                      <b>{name}</b>
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="ml-1 text-sm text-gray-800 hover:text-blue-600 md:ml-2">
                      {name}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    )
  );
};

export default Breadcrumb;
