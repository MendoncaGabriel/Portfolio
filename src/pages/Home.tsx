import IImg from "../../public/images/138128244.png";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export const Home: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 space-y-5 md:space-y-0">

        {/* Primeira coluna */}
        <div className="flex flex-col items-center md:items-start justify-between h-full py-6 sm:py-10">
          <div className="text-center md:text-left text-3xl sm:text-4xl font-bold">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">GABRIEL ANDRADE</h1>
            <p className="text-lg sm:text-2xl">BACKEND DEVELOPER</p>
          </div>

          <p className="text-gray-300 font-light text-center sm:text-left text-base sm:text-lg px-4">
            <b>Backend Developer specialized in Node.js and TypeScript.</b>
            Focused on building scalable and efficient APIs, applying good software architecture practices to ensure performance and security.
            I constantly seek to improve my skills and deliver high-level solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-black font-semibold">
            <a 
              href="https://github.com/MendoncaGabriel"
              target="_blank"
              className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaGithub />
              <span>Github</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/mendon%C3%A7agabriel/"
              target="_blank"
              className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </a>

            <a
              href="/public/docs/Gabriel Andrade Mendonça - Programador Backend.pdf"
              target="_blank"
              className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaFileAlt />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Segunda coluna com imagem */}
        <div className="h-full flex items-center justify-center p-4 sm:p-10">
          <img 
            src={IImg} 
            alt="my image" 
            className="rounded-md shadow-md h-auto max-w-xs sm:max-w-sm md:max-w-md aspect-square"
          />
        </div>

      </section>
    </div>
  );
};
