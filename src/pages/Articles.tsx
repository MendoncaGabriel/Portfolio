export const Articles: React.FC = () => {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="h-full flex flex-col items-center justify-center gap-6">
        {/* Título da seção */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Articles Coming Soon!</h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light mt-2">
            I'm currently working on writing some technical articles. Stay tuned!
          </p>
        </div>
        
      </section>
    </div>
  );
};
