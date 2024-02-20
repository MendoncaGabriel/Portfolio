import ProjetoItem from "./ProjetoItem";
import Titulo from "./Titulo";
import projetoEbook from '../images/p1.webp'
import projetoAutoVagas from '../images/p2.webp'
import projetoPlayTorrent from '../images/playtorrent.png'
import projetoPaginaInstitucional from '../images/p4.webp'
import projetoCompactarImagens from '../images/compactarImagens.png'

export default function Projetos(){
    return(

        <>
            <section class="overflow-x-hidden p-5" id="projetos">
                <div class="ancora mt-10">
                    <Titulo text={'PROJETOS'} />
           

                    <div class="flex p-10   space-x-10 overflow-auto max-w-[1500px] m-auto ">
    
                        <ProjetoItem img={projetoPlayTorrent} titulo={'Site de Downloads'} gitHubProjeto={'https://github.com/MendoncaGabriel/playtorrent'} verProjeto={'https://www.playtorrent.com.br'} />
                        <ProjetoItem img={projetoCompactarImagens} titulo={'Compactar Imagens Online'} gitHubProjeto={'https://github.com/MendoncaGabriel/Compactar-imagem'} verProjeto={'https://mendoncagabriel.github.io/Compactar-imagem/'} />
                        <ProjetoItem img={projetoEbook} titulo={'Pagina de capitura de leeds E-Book'} gitHubProjeto={'https://github.com/MendoncaGabriel/Pagina-Caputura-Ebook'} verProjeto={'https://mendoncagabriel.github.io/Pagina-Caputura-Ebook/'} />
                        <ProjetoItem img={projetoAutoVagas} titulo={'Pagina de vagas online automatica'} gitHubProjeto={'https://github.com/MendoncaGabriel/Auto-Vagas'} verProjeto={'https://mendoncagabriel.github.io/Auto-Vagas'} />
                        <ProjetoItem img={projetoPaginaInstitucional} titulo={'Pagina Institucional'} gitHubProjeto={'https://github.com/MendoncaGabriel/Site-Institucional'} verProjeto={'https://mendoncagabriel.github.io/Site-Institucional/'} />




                    </div>
                </div>
            </section>
        </>
    )
}



