import Apresentacao from "./components/Apresentacao";
import Contatos from "./components/Contatos";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import SobreMin from "./components/SobreMin";
import './index.css'

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Gabriel Andrade - Programador";
  }, []);


  return (
    <>
      <main className="mt-[64px]">
        <Navbar/>
        <Apresentacao/><hr />
        <Contatos/><hr />
        <SobreMin/><hr />
        <Habilidades /><hr />
        <Projetos /><hr />
        <Footer />

      </main>

    </>
  );
}

export default App;
