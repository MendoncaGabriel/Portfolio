import { Link } from "react-router"

export const Navbar: React.FC = () => {
  return(
    <nav className="p-4 flex sm:space-x-4 space-x-2 items-center justify-center text-gray-400 border-b-1">
      <Link to="/" className="hover:text-gray-50 duration-200">HOME</Link>
      <Link to="/about" className="hover:text-gray-50 duration-200">ABOUT</Link>
      <Link to="/articles" className="hover:text-gray-50 duration-200">ARTICLES</Link>
      <Link to="/contact" className="hover:text-gray-50 duration-200">CONTACT</Link>
      <Link to="/projects" className="hover:text-gray-50 duration-200">PROJECTS</Link>
    </nav>
  )
}