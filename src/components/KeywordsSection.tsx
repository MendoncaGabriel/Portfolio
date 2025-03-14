import { FaSearch, FaCode, FaRocket } from "react-icons/fa";

const KeywordsSection = () => {
  return (
    <section className="mt-20 px-6 sm:px-12 md:px-20 lg:px-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-200 mb-8">
        Palavras-chave e SEO
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Palavras-chave gerais */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-all">
          <div className="flex items-center space-x-3 mb-4">
            <FaSearch className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-100">Palavras-chave gerais</h3>
          </div>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>Desenvolvedor Fullstack em Manaus</li>
            <li>Programador em Manaus</li>
            <li>Desenvolvedor de software em Manaus</li>
            <li>Dev Fullstack remoto</li>
            <li>Desenvolvedor Node.js e React</li>
            <li>Programador TypeScript e Fastify</li>
            <li>Especialista em APIs escaláveis</li>
            <li>Engenheiro de software com experiência em Docker e RabbitMQ</li>
            <li>Fullstack Developer (Portuguese & English)</li>
            <li>Dev backend com experiência em microserviços</li>
            <li>Programador especialista em bancos de dados SQL e NoSQL</li>
          </ul>
        </div>

        {/* Palavras-chave técnicas */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-all">
          <div className="flex items-center space-x-3 mb-4">
            <FaCode className="text-green-400 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-100">Palavras-chave técnicas</h3>
          </div>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>Node.js, React, TypeScript, Fastify, Express.js</li>
            <li>API REST, GraphQL, WebSockets</li>
            <li>PostgreSQL, MySQL, MongoDB, Redis</li>
            <li>Prisma ORM, Knex, Zustand, React Query</li>
            <li>Docker, Git, GitHub Actions, CI/CD</li>
            <li>JWT, OAuth 2.0, autenticação e segurança</li>
            <li>RabbitMQ, mensageria, EventEmitter</li>
            <li>Testes automatizados com Vitest e Supertest</li>
            <li>Desenvolvimento de sistemas escaláveis</li>
            <li>Arquitetura MVC, Repository Pattern, SOLID, POO</li>
          </ul>
        </div>

        {/* SEO para recrutadores */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-all">
          <div className="flex items-center space-x-3 mb-4">
            <FaRocket className="text-yellow-400 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-100">SEO para recrutadores</h3>
          </div>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>"Contratar desenvolvedor Fullstack em Manaus"</li>
            <li>"Freelancer para desenvolvimento web"</li>
            <li>"Programador remoto especializado em APIs escaláveis"</li>
            <li>"Especialista em arquitetura de software e backend robusto"</li>
            <li>"Desenvolvimento de software sob demanda"</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeywordsSection;
