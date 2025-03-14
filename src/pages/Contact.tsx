import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10 flex-grow">
      <section className="h-full flex flex-col justify-center items-center gap-6 space-y-5">

        {/* Seção de Informações de Contato */}
        <div className="text-center text-3xl sm:text-4xl font-bold">
          <h1 className="text-5xl sm:text-6xl">ENTRE EM CONTATO</h1>
        </div>

        <p className="text-gray-300 font-light text-center text-sm sm:text-base px-4 md:max-w-1/2">
          <b>Gostou do meu trabalho ou tem alguma dúvida?</b><br />
          Estou sempre aberto a novos desafios e oportunidades. <br /> Fique à vontade para entrar em contato comigo pelas minhas redes sociais ou por e-mail.
        </p>

        <div className="flex w-full flex-wrap justify-center gap-4 text-black font-semibold">
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

          {/* <a
            href="/public/docs/Gabriel Andrade Mendonça - Programador FullStack.pdf"
            target="_blank"
            className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
          >
            <FaFileAlt />
            <span>Currículo</span>
          </a> */}

          <a
            href="mailto:mendoncagabriel1997@gmail.com"
            target="_blank"
            className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
          >
            <FaEnvelope />
            <span>E-mail</span>
          </a>

        </div>
      </section>
    </div>
  );
};
