import { FaCode, FaServer, FaCloud } from "react-icons/fa";

const TechStackShowcase = () => {
  return (
    <section className="px-6 sm:px-12 md:px-20 lg:px-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-200 mb-4">
        O que eu desenvolvo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-100">Aplicações Web Modernas</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Desenvolvo interfaces modernas com <strong>React, Tailwind e TypeScript</strong>,
            focadas em performance, acessibilidade e experiência do usuário.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <FaServer className="text-green-400 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-100">APIs Escaláveis e Seguras</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Crio backends robustos com <strong>Node.js, Fastify, PostgreSQL</strong> e mensageria com <strong>RabbitMQ</strong>, aplicando boas práticas como autenticação com <strong>JWT</strong>, testes e arquitetura limpa.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <FaCloud className="text-yellow-400 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-100">Deploy & DevOps</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Automatizo deploys com <strong>Docker</strong> e <strong>CI/CD</strong>, preparo aplicações para escalar e ser monitoradas em produção. Tenho experiência com integração contínua e versionamento com <strong>GitHub Actions</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
