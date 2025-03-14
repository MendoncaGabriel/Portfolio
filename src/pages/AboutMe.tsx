export const AboutMe: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full space-y-10">
        {/* Título e Introdução */}
        <div className="text-center">
          <h1 className="text-xl sm:text-5xl font-bold">
            Sobre Gabriel Andrade Mendonça
          </h1>
          <p className="sm:text-2xl text-gray-400 mt-2">
            Fullstack Developer | Node.js | React | TypeScript | APIs Escaláveis
            | Microsserviços
          </p>
        </div>

        {/* Descrição sobre a carreira */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Com mais de 3 anos de experiência, sou apaixonado por construir
            sistemas escaláveis e eficientes. Minha expertise abrange tanto o
            backend quanto o frontend, desenvolvendo APIs robustas e interfaces
            dinâmicas para proporcionar uma experiência completa ao usuário.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Sou especializado em tecnologias como Node.js, TypeScript,
            Express.js, Fastify, React, TailwindCSS, Bootstrap, EJS e bancos de
            dados como MySQL, MongoDB e PostgreSQL. Sigo boas práticas como
            SOLID, Arquitetura Limpa e padrões de design como MVC e Repository.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Além disso, tenho experiência com Docker, RabbitMQ e mensageria,
            garantindo escalabilidade e eficiência. Também dou prioridade à
            segurança, utilizando JWT, OAuth 2.0 e outras boas práticas para
            proteger os sistemas que construo.
          </p>
        </div>

        {/* Tecnologias */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">Tecnologias & Ferramentas</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
            {[
              {
                name: "HTML",
                desc: "Marcação para construção de páginas web.",
              },
              {
                name: "CSS",
                desc: "Estilização e responsividade para interfaces.",
              },
              {
                name: "Bootstrap",
                desc: "Framework CSS para layouts responsivos.",
              },
              {
                name: "TailwindCSS",
                desc: "Estilização com classes utilitárias.",
              },
              {
                name: "React",
                desc: "Biblioteca para construção de interfaces reativas.",
              },
              {
                name: "EJS",
                desc: "Template engine para renderização no servidor.",
              },
              { name: "Node.js", desc: "Ambiente JavaScript para backend." },
              {
                name: "TypeScript",
                desc: "Superconjunto de JavaScript com tipagem estática.",
              },
              {
                name: "Express.js",
                desc: "Framework web minimalista para Node.js.",
              },
              {
                name: "Fastify",
                desc: "Framework backend rápido e eficiente.",
              },
              { name: "MySQL", desc: "Banco de dados relacional." },
              {
                name: "PostgreSQL",
                desc: "Banco de dados SQL avançado e escalável.",
              },
              {
                name: "MongoDB",
                desc: "Banco de dados NoSQL orientado a documentos.",
              },
              {
                name: "Redis",
                desc: "Armazenamento em cache e mensagens assíncronas.",
              },
              {
                name: "Prisma",
                desc: "ORM moderno e tipado para bancos de dados.",
              },
              { name: "Knex", desc: "Query builder SQL para Node.js." },
              {
                name: "RabbitMQ",
                desc: "Mensageria para comunicação assíncrona.",
              },
              {
                name: "BullMQ",
                desc: "Gerenciamento de filas de trabalhos assíncronos.",
              },
              {
                name: "Docker",
                desc: "Conteinerização para ambientes isolados.",
              },
              { name: "Linux", desc: "Sistema operacional para servidores." },
              {
                name: "Git & GitHub",
                desc: "Controle de versão e colaboração.",
              },
              {
                name: "JWT & OAuth 2.0",
                desc: "Autenticação e segurança de APIs.",
              },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-xl font-medium text-gray-300">
                  {tech.name}
                </div>
                <p className="text-sm text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência Freelancer */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">
            Experiência Freelancer
          </h2>

          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold">
              Cadastro AI - ONG Sidney Cardeira
            </h3>
            <p className="text-gray-300 font-light mt-2">
              Desenvolvi um sistema de cadastro de usuários para uma ONG que
              oferece cursos, aulas de teatro e violão para pessoas de baixa
              renda, facilitando a gestão dos participantes e atividades.
            </p>
          </div>

          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold">Santo Bingo</h3>
            <p className="text-gray-300 font-light mt-2">
              Criei um sistema completo de bingo, incluindo autenticação e
              autorização de usuários, geração de cartelas personalizadas,
              conferência automática de vencedores e criação de jogos para
              eventos, como festas de igrejas e festividades juninas.
            </p>
          </div>

          <div className="border-t-2 border-gray-400 pt-4">
            <h3 className="text-xl font-semibold">Pop Sales (Em andamento)</h3>
            <p className="text-gray-300 font-light mt-2">
              Atualmente, estou desenvolvendo um sistema de gestão de
              funcionários para entregadores, promotores e vendedores. O sistema
              permitirá a criação de rotas de visitas, definição de clientes a
              serem atendidos, controle de check-in/check-out e acompanhamento
              de metas e bonificações.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
