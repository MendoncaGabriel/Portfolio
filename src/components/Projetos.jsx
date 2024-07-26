import ProjetoItem from "./ProjetoItem";
import Titulo from "./Titulo";


// POR ISTO EM UMA BASE DE DADOS
const projetos = [
    {
        descricao: "Sistema de cadastro com administrador master, usuários registradores e cadastro de pessoas. Inclui link de cadastro público com referência do usuário registrador e vários filtros de busca.",
        img: "/Portfolio/images/cadastra-ai.png",
        titulo: "Cadastra AI!",
        github: "https://github.com/MendoncaGabriel/Cadastra_AI",
        link: "https://www.playtorrent.com.br"
    },
    {
        descricao: "Galeria de jogos e emuladores para PC com descrições, mídias e requisitos, tudo em um só lugar para download via torrent.",
        img: "/Portfolio/images/projetoPlayTorrent.png", 
        titulo: "Site de Downloads",
        github: "https://github.com/MendoncaGabriel/playtorrent",
        link: "https://cadastro-cadastro1.m3blox.easypanel.host/"
    },
    {
        descricao: "Sistema de gerenciamento de eventos de bingo, com cadastro de participantes, geração de cartões em PDF e sorteio automático.",
        img: "/Portfolio/images/projetoBingo.png", 
        titulo: "Sistema de Bingos Online",
        github: "https://github.com/MendoncaGabriel/Bingo-Management-System",
        link: "https://youtu.be/0818QKHj9gs"
    },
    {
        descricao: "Servidor de mídia de vídeo em streaming usando Node.js, permitindo criar seu próprio servidor estilo Netflix.",
        img: "https://www.scaler.com/topics/images/streams-in-nodejs-thumbnail.webp",
        titulo: "Media Server",
        github: "https://github.com/MendoncaGabriel/media-server",
        link: ""
    },
    {
        descricao: "Sistema de compactação de imagens em diversos formatos sem perda significativa de qualidade.",
        img: "/Portfolio/images/projetoCompactarImagens.png", 
        titulo: "Compactar Imagens Online",
        github: "https://github.com/MendoncaGabriel/Compactar-imagem",
        link: "https://mendoncagabriel.github.io/Compactar-imagem/"
    },
    {
        descricao: "Página de captura de leads para eBook com formulário de cadastro.",
        img: "/Portfolio/images/projetoEbook.png", 
        titulo: "Pagina de captura de leads E-Book",
        github: "https://github.com/MendoncaGabriel/Pagina-Caputura-Ebook",
        link: "https://mendoncagabriel.github.io/Pagina-Caputura-Ebook/"
    },
    {
        descricao: "Sistema que busca vagas em vários sites, reúne tudo em um só lugar usando raspagem de dados, com e-mails preconfigurados e botão para envio simplificado de currículo.",
        img: "/Portfolio/images/projetoAutoVagas.png", 
        titulo: "Pagina de vagas online automática",
        github: "https://github.com/MendoncaGabriel/Auto-Vagas",
        link: "https://mendoncagabriel.github.io/Auto-Vagas"
    },
    {
        descricao: "Galeria de imagens polaroide com carregamento infinito feito usando React js, minimalista e funcional!",
        img: "/Portfolio/images/galeria.gif", 
        titulo: "Galeria de imagens",
        github: "https://github.com/MendoncaGabriel/galeria-imagens-react",
        link: ""
    },
    {
        descricao: "Página institucional simples para treinamento em TailwindCSS, com design responsivo, seções de apresentação, serviços, depoimentos e contato.",
        img: "/Portfolio/images/projetoPaginaInstitucional.png", 
        titulo: "Página Institucional",
        github: "https://github.com/MendoncaGabriel/Site-Institucional",
        link: "https://mendoncagabriel.github.io/Site-Institucional/"
    },
];

export default function Projetos(){
    return(
        <>
            <section class=" p-5  min-h-scree flex items-center justify-center" id="projetos">
                <div class="ancora mt-10">
                    <Titulo text={'PROJETOS'} />

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 space-y-4 md:space-y-0">
                        {
                            projetos.map(e => 
                                <ProjetoItem 
                                    descricao={e.descricao} 
                                    img={e.img} 
                                    titulo={e.titulo} 
                                    gitHubProjeto={e.github} 
                                    verProjeto={e.link} 
                                />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}