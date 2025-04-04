"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const routes = ["/sobre", "/artigos", "/contato", "/projeto"];

  const navItems = [
    { path: "/", label: "INÍCIO" },
    { path: "/sobre", label: "SOBRE" },
    { path: "/artigos", label: "ARTIGOS" },
    { path: "/contato", label: "CONTATO" },
    { path: "/projetos", label: "PROJETOS" },
  ];

  return (
    <nav className="z-50 bg-black shadow-black shadow-2xl fixed top-0 left-0 w-full p-4 flex sm:space-x-4 space-x-2 items-center justify-center text-gray-500 border-b">
      {navItems.map(({ path, label }) => {
        const isActive =
          pathname === path || (path === "/" && !routes.includes(pathname));

        return (
          <Link
            key={path}
            href={path}
            className={`hover:text-gray-50 transition-colors duration-200 ${
              isActive ? "text-gray-100 font-bold" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
