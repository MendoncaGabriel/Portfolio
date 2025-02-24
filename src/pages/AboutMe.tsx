import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export const AboutMe: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full space-y-8">
        {/* Título e Introdução */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold ">About Gabriel Andrade Mendonça</h1>
          <p className="text-xl sm:text-2xl text-gray-400 mt-2">
            Backend Developer | Node.js | TypeScript | Scalable APIs | Microservices
          </p>
        </div>

        {/* Descrição sobre a carreira */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-gray-300 font-light">
            With over 3 years of experience, I am passionate about building scalable and efficient backend systems. My expertise is focused on developing APIs, microservices, and handling asynchronous processing. I strive to build robust systems with a focus on performance and security.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            I specialize in technologies such as Node.js, TypeScript, Express.js, Fastify, and various databases like MySQL, MongoDB, and PostgreSQL. I follow best practices like SOLID principles, Clean Architecture, and design patterns like MVC and Repository to ensure maintainable and scalable code.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            I am always looking for opportunities to learn and grow in the tech industry. I am familiar with containerization using Docker and have experience in message queuing with RabbitMQ and BullMQ. I also prioritize security, using JWT, OAuth 2.0, and other best practices to protect the systems I build.
          </p>
        </div>

        {/* Tecnologias que uso */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold ">Technologies & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl text-gray-400">Node.js</div>
              <span className="text-gray-500">Backend Framework</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl text-gray-400">TypeScript</div>
              <span className="text-gray-500">Strongly Typed Language</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl text-gray-400">Express.js</div>
              <span className="text-gray-500">Web Framework</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl text-gray-400">Fastify</div>
              <span className="text-gray-500">Web Framework</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl text-gray-400">MySQL</div>
              <span className="text-gray-500">Relational Database</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl text-gray-400">MongoDB</div>
              <span className="text-gray-500">NoSQL Database</span>
            </div>
          </div>
        </div>

        {/* Experiência profissional */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold  text-center">Professional Experience</h2>
          
          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold ">CliqIP – Backend Developer</h3>
            <p className="text-gray-300 font-light mt-2">
              <b>05/08/2024 to 18/02/2025</b>
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Developed scalable APIs and internal systems for automating customer service, support, and service management.</li>
              <li>Worked on database modeling and optimization for performance and scalability.</li>
              <li>Implemented microservices, SSO, and complex system integrations.</li>
              <li>Participated in bug fixes, feature development, and architecture improvements across multiple company projects.</li>
            </ul>
          </div>

          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold ">Grupo MM – Fullstack Developer</h3>
            <p className="text-gray-300 font-light mt-2">
              <b>20/10/2023 to 01/08/2024</b>
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Developed the MAIN web system for managing orders, user registration, deliveries, stock, loyalty, budgets, and purchase analysis.</li>
              <li>Customized and enhanced the Tray Commerce e-commerce platform according to business needs.</li>
              <li>Worked on software modeling and architecture, ensuring efficiency, scalability, and system integration.</li>
            </ul>
          </div>
        </div>

        {/* Contato e Links */}
        <div className="text-center mt-8">
          <h3 className="text-2xl  font-semibold">Get in Touch</h3>
          <div className="flex justify-center gap-6 mt-4 text-black font-semibold">
            <a
              href="https://github.com/MendoncaGabriel"
              target="_blank"
              className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mendon%C3%A7agabriel/"
              target="_blank"
              className="px-4 py-2 rounded-sm bg-gray-300 flex items-center space-x-2 justify-center hover:shadow-md shadow-purple-800 duration-200 hover:-translate-y-1 hover:border-purple-500 border-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
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
      </section>
    </div>
  );
};
