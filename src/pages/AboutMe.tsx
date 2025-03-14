import { FaGithub, FaLinkedin } from "react-icons/fa";

export const AboutMe: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full space-y-8">
        {/* Título e Introdução */}
        <div className="text-center">
          <h1 className="text-xl sm:text-5xl font-bold ">Sobre Gabriel Andrade Mendonça</h1>
          <p className=" sm:text-2xl text-gray-400 mt-2">
            Backend Developer | Node.js | TypeScript | APIs Escaláveis | Microsserviços
          </p>
        </div>

        {/* Descrição sobre a carreira */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Com mais de 3 anos de experiência, sou apaixonado por construir sistemas de backend escaláveis e eficientes. Minha expertise é focada no desenvolvimento de APIs, microsserviços e no tratamento de processamento assíncrono. Busco construir sistemas robustos com foco em performance e segurança.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Sou especializado em tecnologias como Node.js, TypeScript, Express.js, Fastify e diversos bancos de dados como MySQL, MongoDB e PostgreSQL. Sigo boas práticas como os princípios SOLID, Arquitetura Limpa e padrões de design como MVC e Repository para garantir um código manutenível e escalável.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Estou sempre em busca de oportunidades para aprender e crescer na indústria de tecnologia. Tenho experiência com containerização utilizando Docker e em filas de mensagens com RabbitMQ e BullMQ. Também dou prioridade à segurança, utilizando JWT, OAuth 2.0 e outras boas práticas para proteger os sistemas que construo.
          </p>
        </div>

        {/* Tecnologias que uso */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">Tecnologias & Ferramentas</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
            {[
              { name: "Node.js", description: "Runtime Backend" },
              { name: "TypeScript", description: "Linguagem Fortemente Tipada" },
              { name: "Express.js", description: "Framework Web" },
              { name: "Fastify", description: "Framework Web" },
              { name: "MySQL", description: "Banco de Dados Relacional" },
              { name: "PostgreSQL", description: "Banco de Dados Relacional" },
              { name: "MongoDB", description: "Banco de Dados NoSQL" },
              { name: "Redis", description: "Cache & Mensageria" },
              { name: "Prisma", description: "ORM & Construtor de Consultas" },
              { name: "Knex", description: "Construtor de Consultas" },
              { name: "RabbitMQ", description: "Broker de Mensagens" },
              { name: "BullMQ", description: "Fila de Tarefas" },
              { name: "Docker", description: "Containerização" },
              { name: "Linux", description: "Sistema Operacional" },
              { name: "Git & GitHub", description: "Controle de Versão" },
              { name: "JWT & OAuth 2.0", description: "Autenticação & Segurança" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-xl font-medium text-gray-700">{tech.name}</div>
                <span className="text-gray-500 text-sm">{tech.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência profissional */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Experiência Profissional</h2>
          
          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold ">ClickIP – Backend Developer</h3>
            <p className="text-gray-300 font-light mt-2">
              <b>05/08/2024 a 18/02/2025</b>
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Desenvolvi APIs escaláveis e sistemas internos para automação do atendimento ao cliente, suporte e gestão de serviços.</li>
              <li>Trabalhei na modelagem e otimização de banco de dados para performance e escalabilidade.</li>
              <li>Implementei microsserviços, SSO e integrações complexas de sistemas.</li>
              <li>Participei de correções de bugs, desenvolvimento de funcionalidades e melhorias na arquitetura de diversos projetos da empresa.</li>
            </ul>
          </div>

          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold ">Grupo MM – Fullstack Developer</h3>
            <p className="text-gray-300 font-light mt-2">
              <b>20/10/2023 a 01/08/2024</b>
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Desenvolvi o sistema WEB PRINCIPAL para gestão de pedidos, cadastro de usuários, entregas, estoque, fidelidade, orçamentos e análise de compras.</li>
              <li>Personalizei e melhorei a plataforma de e-commerce Tray Commerce conforme as necessidades do negócio.</li>
              <li>Trabalhei na modelagem e arquitetura de software, garantindo eficiência, escalabilidade e integração de sistemas.</li>
            </ul>
          </div>
        </div>

        {/* Contato e Links */}
        <div className="flex border-gray-50 w-full flex-wrap justify-center gap-4 text-black font-semibold">
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
          </div>
      </section>
    </div>
  );
};
