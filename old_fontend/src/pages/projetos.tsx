import { ProjectCard } from "components/ProjectCard";
import { listProjects } from "./api/project";

interface Projeto {
  id: string,
  title: string,
  description: string,        
  technologies: string[],
  githubUrl: string,
  siteUrl: string,
  createdAt: string,  // Changed from Date to string
  updatedAt: string   // Changed from Date to string
}

export async function getServerSideProps() {
  const data = await listProjects();
  
  const projetos = data.map(projeto => ({
    ...projeto,
    createdAt: projeto.createdAt.toISOString(),
    updatedAt: projeto.updatedAt.toISOString()
  }));
  
  return {
    props: {
      projetos,
    },
  };
}

export default function Projetos({ projetos }: { projetos: Projeto[] }) {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full flex flex-col items-center justify-center gap-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Projetos</h1>
          {projetos.length > 0 && (
            <p className="text-lg sm:text-xl text-gray-300 font-light mt-2">
              Aqui estão alguns dos projetos em que trabalhei. <br /> Clique neles para ver mais detalhes ou visualizar o código.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projetos.length > 0 ? (
            projetos.map((projeto, index) => (
              <ProjectCard
                key={index}
                title={projeto.title}
                description={projeto.description}
                technologies={projeto.technologies}
                siteUrl={projeto.siteUrl}
                githubUrl={projeto.githubUrl}
              />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center">
              <p className="text-center text-gray-300 border p-4">
                Desculpe, ainda estou trabalhando nisso. Projetos nos quais já trabalhei serão postados em breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
