import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation(); // Obtém a URL atual

  // Lista de rotas definidas na navbar
  const routes = ["/about", "/articles", "/contact", "/projects"];

  return (
    <nav className="z-50 bg-black shadow-black shadow-2xl fixed top-0 left-0 w-full p-4 flex sm:space-x-4 space-x-2 items-center justify-center text-gray-500 border-b-1">
      {[
        { path: "/", label: "INÍCIO" },
        { path: "/about", label: "SOBRE" },
        { path: "/articles", label: "ARTIGOS" },
        { path: "/contact", label: "CONTATO" },
        { path: "/projects", label: "PROJETOS" },
      ].map(({ path, label }) => {
        // "INÍCIO" será marcado por padrão se a URL atual não estiver na lista de rotas específicas
        const isActive =
          location.pathname === path ||
          (path === "/" && !routes.includes(location.pathname));

        return (
          <Link
            key={path}
            to={path}
            className={`hover:text-gray-50 duration-100 ${
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
