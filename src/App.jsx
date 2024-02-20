import Apresentacao from "./components/Apresentacao";
import Contatos from "./components/Contatos";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
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

      </main>

    </>
  );
}

export default App;
