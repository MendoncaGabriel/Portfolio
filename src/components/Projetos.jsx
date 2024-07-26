import ProjetoItem from "./ProjetoItem";
import Titulo from "./Titulo";
import projetoEbook from '../images/p1.webp'
import projetoAutoVagas from '../images/p2.webp'
import projetoPlayTorrent from '../images/playtorrent.png'
import projetoPaginaInstitucional from '../images/p4.webp'
import projetoCompactarImagens from '../images/compactarImagens.png'
import projetoBingo from "../images/bingo.png";
import projetoCadastraAi from "../images/cadastra-ai.png";

export default function Projetos(){
    return(

        <>
            <section class=" p-5  min-h-scree flex items-center justify-center" id="projetos">
                <div class="ancora mt-10">
                    <Titulo text={'PROJETOS'} />

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 space-y-4 md:space-y-0">
                        <ProjetoItem descricao={'Sistema de cadastro com administrador master, usuários registradores e cadastro de pessoas. Inclui link de cadastro público com referência do usuário registrador e vários filtros de busca.'} img={projetoCadastraAi} titulo={'Cadastra AI!'} gitHubProjeto={'https://github.com/MendoncaGabriel/Cadastra_AI'} verProjeto={'https://www.playtorrent.com.br'} />
                        <ProjetoItem descricao={'Galeria de jogos e emuladores para PC com descrições, mídias e requisitos, tudo em um só lugar para download via torrent.'} img={projetoPlayTorrent} titulo={'Site de Downloads'} gitHubProjeto={'https://github.com/MendoncaGabriel/playtorrent'} verProjeto={'https://cadastro-cadastro1.m3blox.easypanel.host/'} />
                        <ProjetoItem descricao={'Sistema de gerenciamento de eventos de bingo, com cadastro de participantes, geração de cartões em PDF e sorteio automático.'} img={projetoBingo} titulo={'Sistema de Bingos Online'} gitHubProjeto={'https://github.com/MendoncaGabriel/Bingo-Management-System'} verProjeto={'https://youtu.be/0818QKHj9gs'} />
                        <ProjetoItem descricao={'Servidor de mídia de vídeo em streaming usando Node.js, permitindo criar seu próprio servidor estilo Netflix.'} img={"https://www.scaler.com/topics/images/streams-in-nodejs-thumbnail.webp"} titulo={'Media Server'} gitHubProjeto={'https://github.com/MendoncaGabriel/media-server'} />
                        <ProjetoItem descricao={'Sistema de compactação de imagens em diversos formatos sem perda significativa de qualidade.'} img={projetoCompactarImagens} titulo={'Compactar Imagens Online'} gitHubProjeto={'https://github.com/MendoncaGabriel/Compactar-imagem'} verProjeto={'https://mendoncagabriel.github.io/Compactar-imagem/'} />
                        <ProjetoItem descricao={'Página de captura de leads para eBook com formulário de cadastro.'} img={projetoEbook} titulo={'Pagina de capitura de leeds E-Book'} gitHubProjeto={'https://github.com/MendoncaGabriel/Pagina-Caputura-Ebook'} verProjeto={'https://mendoncagabriel.github.io/Pagina-Caputura-Ebook/'} />
                        <ProjetoItem descricao={'Sistema que busca vagas em vários sites, reúne tudo em um só lugar usando raspagem de dados, com e-mails preconfigurados e botão para envio simplificado de currículo.'} img={projetoAutoVagas} titulo={'Pagina de vagas online automatica'} gitHubProjeto={'https://github.com/MendoncaGabriel/Auto-Vagas'} verProjeto={'https://mendoncagabriel.github.io/Auto-Vagas'} />
                        <ProjetoItem descricao={'Página institucional simples para treinamento em TailwindCSS, com design responsivo, seções de apresentação, serviços, depoimentos e contato.'} img={projetoPaginaInstitucional} titulo={'Pagina Institucional'} gitHubProjeto={'https://github.com/MendoncaGabriel/Site-Institucional'} verProjeto={'https://mendoncagabriel.github.io/Site-Institucional/'} />
                    </div>
                </div>
            </section>
        </>
    )
}



