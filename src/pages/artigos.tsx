import { ArticleCard } from "../components/ArticleCard";

export default function artigos(){
  function getPreview(content: string, length = 160): string {
    const clean = content.replace(/[#>*_`\-]/g, '').replace(/\s+/g, ' ').trim();
    return clean.length > length ? clean.substring(0, length) + '...' : clean;
  }

  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full flex flex-col items-center justify-center gap-6">
        {/* Título da seção */}
        <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">Últimos Artigos</h1>
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
          <ArticleCard
            title="Por que TypeScript se tornou essencial para aplicações modernas"
            description="O TypeScript não é mais apenas uma “alternativa ao JavaScript”. Ele se consolidou como um padrão de fato para o desenvolvimento de aplicações escaláveis e robustas, especialmente em ambientes corporativos, grandes equipes e projetos de longa duração...."
            imageUrl="https://sdmntprwestus.oaiusercontent.com/files/00000000-f610-6230-a5ae-cff61ffa8216/raw?se=2025-04-05T01%3A28%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=db7ba572-5627-504f-aa61-ad7fcb04d3ec&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-04T09%3A09%3A14Z&ske=2025-04-05T09%3A09%3A14Z&sks=b&skv=2024-08-04&sig=Cg/dQ7HGxL83haCa4wQITamC93KNz4hhuFNm4Eyi%2BQs%3D"
            author="Gabriel Andrade"
            date="04 de Abril, 2025"
          />


          </div>
        </div>
        
      </section>
    </div>
  );
};
