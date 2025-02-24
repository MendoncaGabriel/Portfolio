import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects: React.FC = () => {
  const projetos = [
    {
      nome: "API de E-commerce",
      descricao: "Uma API RESTful de e-commerce que gerencia produtos, usuários, e pedidos, utilizando Node.js, Express.js e MongoDB.",
      tecnologias: ["Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/MendoncaGabriel/ecommerce-api",
      link: "https://ecommerce-api.example.com",
    },
    {
      nome: "Sistema de Gestão de Tarefas",
      descricao: "Sistema simples para gerenciar tarefas, com autenticação de usuário e integração com banco de dados MySQL.",
      tecnologias: ["Node.js", "MySQL", "JWT"],
      github: "https://github.com/MendoncaGabriel/task-manager",
      link: "https://task-manager.example.com",
    },
    {
      nome: "Chat em Tempo Real",
      descricao: "Aplicação de chat em tempo real utilizando WebSockets, Node.js e Redis para comunicação eficiente entre os usuários.",
      tecnologias: ["Node.js", "WebSocket", "Redis"],
      github: "https://github.com/MendoncaGabriel/real-time-chat",
      link: "https://real-time-chat.example.com",
    },
  ];

  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full flex flex-col items-center justify-center gap-6">
        {/* Título da seção */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Projects</h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light mt-2">
            Here are some of the projects I've worked on. Click on them to see more details or view the code.
          </p>
        </div>

        {/* Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <h2 className="text-2xl font-semibold text-gray-50">{projeto.nome}</h2>
              <p className="text-gray-300 mt-2">{projeto.descricao}</p>
              <p className="text-sm text-gray-400 mt-2">
                <b>Technologies:</b> {projeto.tecnologias.join(", ")}
              </p>

              <div className="mt-4 flex space-x-4">
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-50"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-50"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
