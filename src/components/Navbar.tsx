import { Link } from "react-router";

export const Navbar: React.FC = () => {
  return (
    <nav className="z-50 bg-black shadow-black shadow-2xl fixed top-0 left-0 w-full p-4 flex sm:space-x-4 space-x-2 items-center justify-center text-gray-500 border-b-1">
      <Link to="/" className="hover:text-gray-50 duration-100">INÍCIO</Link>
      <Link to="/about" className="hover:text-gray-50 duration-100">SOBRE</Link>
      <Link to="/articles" className="hover:text-gray-50 duration-100">ARTIGOS</Link>
      <Link to="/contact" className="hover:text-gray-50 duration-100">CONTATO</Link>
      <Link to="/projects" className="hover:text-gray-50 duration-100">PROJETOS</Link>
    </nav>
  );
};
