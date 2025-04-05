// pages/index.tsx
import ScrollingLogoAnimation from "components/TechLogos";
import IImg from "../../public/images/138128244.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import TechStackShowcase from "components/TechStackShowcase";

export default function HomePage() {
  return (
    <div className="text-gray-50 h-full sm:p-12 lg:p-16 ">
      <section className="h-full  flex-col sm:flex-row flex items-center justify-center">
        {/* Primeira coluna */}
        <div className="flex flex-col items-center md:items-start justify-between h-full  sm:py-10 space-y-6 md:space-y-8  md:w-1/2">
          <div className="text-center md:text-right text-4xl sm:text-5xl md:text-6xl font-extrabold  w-full">
            <h1 className="text-3xl sm:text-5xl md:text-5xl truncate whitespace-nowrap overflow-hidden text-ellipsis">
              GABRIEL ANDRADE
            </h1>

            <p className="text-xl sm:text-3xl font-semibold text-gray-300 mt-2">
              FULLSTACK DEVELOPER
            </p>
          </div>

          <p className="text-gray-300 font-light text-center sm:text-left text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12">
            <strong>Desenvolvedor Fullstack</strong> com foco em <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>React</strong> e <strong>Next.js</strong>, atuando na criação de <strong>APIs escaláveis</strong> e no desenvolvimento de <strong>interfaces modernas</strong>. Prezo por boas práticas de <strong>arquitetura de software</strong>, priorizando <strong>performance</strong>, <strong>segurança</strong> e <strong>usabilidade</strong>. Estou em constante evolução, buscando sempre entregar <strong>soluções sólidas e de qualidade</strong>.
          </p>


          <div className="flex flex-wrap justify-center md:justify-center space-x-2  text-black font-semibold w-full">
            <a
              href="https://github.com/MendoncaGabriel"
              target="_blank"
              className="px-4 py-2  rounded-lg bg-gray-300 flex items-center space-x-3 justify-center hover:shadow-xl shadow-purple-800 duration-300 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaGithub size={24} />
              <span className="text-lg sm:text-xl">Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mendon%C3%A7agabriel/"
              target="_blank"
              className="px-4 py-2  rounded-lg bg-gray-300 flex items-center space-x-3 justify-center hover:shadow-xl shadow-purple-800 duration-300 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaLinkedin size={24} />
              <span className="text-lg sm:text-xl">Linkedin</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:my-0 my-5">
          <Image
            src={IImg}
            alt="Gabriel Mendonça - Desenvolvedor Fullstack em Manaus"
            title="Desenvolvedor de Software"
            className="shadow-xl w-52 border-4 border-gray-900 rounded-2xl"
          />
        </div>
      </section>

      <ScrollingLogoAnimation />
      <TechStackShowcase />

    </div>
  );
}
