import { FaGithub } from "react-icons/fa";

interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  github: string;
}

export const Projects: React.FC = () => {
  const projetos: Projeto[] = [
    // {
    //   nome: "Product Manager",
    //   descricao: "API for managing users, products, and categories with authentication and CRUD operations, using Repository and Factory Pattern for a modular architecture.",
    //   tecnologias: ["Node.js", "Typescript", "Fastify.js", "PostgreSql", "Prisma.js", "Docker", "Zod"],
    //   github: "https://github.com/MendoncaGabriel/product-manager",
    // },
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
          {projetos.length !== 0 ? (
            projetos.map((projeto, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <h2 className="text-2xl font-semibold text-gray-50">{projeto.nome}</h2>
                <p className="text-gray-300 mt-2">{projeto.descricao}</p>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="text-purple-500 text-lg">Technologies:</b> {projeto.tecnologias.join(", ")}
                </p>

                <div className="mt-4 flex space-x-4">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-50 ml-auto"
                  >
                    <FaGithub className="text-4xl" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">
              Sorry I'm still working on it, projects I've already worked on will be posted soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
