import { Link } from "react-router"

export const Navbar: React.FC = () => {
  return(
    <nav className="p-4 flex gap-4 items-center justify-center text-gray-400 border-b-1">
      <Link to="/" className="hover:text-gray-50 duration-200">HOME</Link>
      <Link to="/about" className="hover:text-gray-50 duration-200">ABOUT</Link>
      <Link to="/articles" className="hover:text-gray-50 duration-200">ARTICLES</Link>
      <Link to="/contact" className="hover:text-gray-50 duration-200">CONTACT</Link>
    </nav>
  )
}