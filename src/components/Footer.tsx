import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/MendoncaGabriel"
            target="_blank"
            className="text-gray-300 hover:text-gray-50 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mendon%C3%A7agabriel/"
            target="_blank"
            className="text-gray-300 hover:text-gray-50 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="text-sm mb-2">&copy; {currentYear} Gabriel Andrade. Todos os direitos reservados.</p>
        <p className="text-sm">Desenvolvedor Fullstack | Manaus, AM</p>
      </div>
    </footer>
  );
};
