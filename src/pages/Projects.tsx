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
    //   descricao: "API para gerenciar usuários, produtos e categorias com autenticação e operações CRUD, utilizando Repository e Factory Pattern para uma arquitetura modular.",
    //   tecnologias: ["Node.js", "Typescript", "Fastify.js", "PostgreSql", "Prisma.js", "Docker", "Zod"],
    //   github: "https://github.com/MendoncaGabriel/product-manager",
    // },
  ];

  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full flex flex-col items-center justify-center gap-6">
        {/* Título da seção */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Projetos</h1>
          {projetos.length > 0 && (
            <p className="text-lg sm:text-xl text-gray-300 font-light mt-2">
              Aqui estão alguns dos projetos em que trabalhei. Clique neles para ver mais detalhes ou visualizar o código.
            </p>
          )}
        </div>

        {/* Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border">
          {projetos.length !== 0 ? (
            projetos.map((projeto, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <h2 className="text-2xl font-semibold text-gray-50">{projeto.nome}</h2>
                <p className="text-gray-300 mt-2">{projeto.descricao}</p>
                <p className="text-sm text-gray-400 mt-2">
                  <b className="text-purple-500 text-lg">Tecnologias:</b> {projeto.tecnologias.join(", ")}
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
            <p></p>
          )}
        </div>

        {/* Condicional para quando não há projetos */}
        {projetos.length === 0 && (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-gray-300 border p-4">
              Desculpe, ainda estou trabalhando nisso. Projetos nos quais já trabalhei serão postados em breve.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
