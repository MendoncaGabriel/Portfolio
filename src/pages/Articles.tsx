import { ArticleCard } from "../components/ArticleCard";

export const Articles: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full flex flex-col items-center justify-center gap-6">
        {/* Título da seção */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Artigos em Breve!</h1>
          <p className=" hidden text-lg sm:text-xl text-gray-300 font-light mt-2">
            Estou atualmente trabalhando na escrita de alguns artigos técnicos. Fique ligado!
          </p>

          <div className="grid md:grid-cols-4 gap-4 my-5 p-4">
          <ArticleCard
            title="Por que você deve conhecer o RabbitMQ"
            description="O RabbitMQ é um message broker, ou seja, um intermediário que recebe, armazena e encaminha mensagens entre diferentes partes da aplicação..."
            imageUrl="https://media.licdn.com/dms/image/v2/D4D22AQGEelC8jqxMMg/feedshare-shrink_800/B4DZYCf7fSHwAk-/0/1743798649405?e=1746662400&v=beta&t=EINwcsKtVM_K5VxdGgYi-V2G-6yGjbAd_g4maDo1oSs"
            author="Gabriel Andrade"
            date="04 de Abril, 2025"
          />


          </div>
        </div>
        
      </section>
    </div>
  );
};
