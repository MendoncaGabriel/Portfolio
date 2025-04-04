"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "INÍCIO" },
    { path: "/sobre", label: "SOBRE" },
    { path: "/artigos", label: "ARTIGOS" },
    { path: "/contato", label: "CONTATO" },
    { path: "/projetos", label: "PROJETOS" },
  ];

  return (
<nav className="z-50 bg-black shadow-black shadow-2xl fixed top-0 left-0 w-full border-b text-gray-500 overflow-x-auto">
  <div className="p-4 flex justify-start gap-x-4 whitespace-nowrap">
    {navItems.map(({ path, label }) => {
      const isActive =
        pathname === path ||
        (path === "/artigos" && pathname.startsWith("/artigo/"));

      return (
        <Link
          key={path}
          href={path}
          className={`hover:text-gray-50 transition-colors duration-200 text-lg md:text-base ${
            isActive ? "text-gray-100 font-bold" : ""
          }`}
        >
          {label}
        </Link>
      );
    })}
  </div>
</nav>


  );
};
