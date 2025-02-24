import IImg from "../../public/images/138128244.png";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import ScrollingLogoAnimation from "../components/TechLogos";

export const Home: React.FC = () => {
  return (
    <div className="text-gray-50 h-full sm:p-12 lg:p-16 ">
      <section className="h-full  flex-col sm:flex-row flex items-center justify-center">

        {/* Primeira coluna */}
        <div className="flex flex-col items-center md:items-start justify-between h-full  sm:py-10 space-y-6 md:space-y-8  md:w-1/2">

          <div className="text-center md:text-right text-4xl sm:text-5xl md:text-6xl font-extrabold  w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl">GABRIEL ANDRADE</h1>
            <p className="text-xl sm:text-3xl font-semibold text-gray-300 mt-2">BACKEND DEVELOPER</p>
          </div>

          <p className="text-gray-300  font-light text-center sm:text-left text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12">
            <b>Backend Developer specialized in Node.js and TypeScript.</b>
            Focused on building scalable and efficient APIs, applying good software architecture practices to ensure performance and security.
            I constantly seek to improve my skills and deliver high-level solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-center sm:gap-6  text-black font-semibold w-full">
            <a 
              href="https://github.com/MendoncaGabriel"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-gray-300 flex items-center space-x-3 justify-center hover:shadow-xl shadow-purple-800 duration-300 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaGithub size={24} />
              <span className="text-lg sm:text-xl">Github</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/mendon%C3%A7agabriel/"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-gray-300 flex items-center space-x-3 justify-center hover:shadow-xl shadow-purple-800 duration-300 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaLinkedin size={24} />
              <span className="text-lg sm:text-xl">Linkedin</span>
            </a>

            <a
              href="/public/docs/Gabriel Andrade Mendonça - Programador Backend.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-gray-300 flex items-center space-x-3 justify-center hover:shadow-xl shadow-purple-800 duration-300 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaFileAlt size={24} />
              <span className="text-lg sm:text-xl">Resume</span>
            </a>
          </div>


        </div>


        <div className="flex items-center justify-center p-8 sm:p-12 md:p-16">
          <img 
            src={IImg} 
            alt="my image" 
            className="rounded-lg shadow-xl w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
          />
        </div>



      </section>

      
        <ScrollingLogoAnimation /> 
  

    </div>
  );
};
