import Apresentacao from "./components/Apresentacao";
import Contatos from "./components/Contatos";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import SobreMin from "./components/SobreMin";

function App() {
  return (
    <>
      <main className="mt-[64px]">
        <Navbar/>
        <Apresentacao/>
        <Contatos/>
        <SobreMin/>
        <Habilidades />
        <Projetos />
        <Footer />

      </main>

    </>
  );
}

export default App;
