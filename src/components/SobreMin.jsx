import { useState, useEffect } from "react"
import VetorIlustrativos from '../images/programador-e-processo-de-codificacao-e-conceito-de-programacao-vetor_272930-2.png'
import Titulo from "./Titulo";

export default function SobreMin(){
    const [idade, setIdade] = useState(0)
    const [experiencia, setExperiencia] = useState(0)

    useEffect(() => {
        setIdade(new Date().getFullYear() - 1997);
        setExperiencia(new Date().getFullYear() - 2022);
    }, []);


    return(
        <>
            <section class=" p-5 md:p-20 md:pt-5 border border-red-500 text-gray-700" >
                <div class=" mt-16">

                    <Titulo text="SOBRE MIN" />

                    <div class="md:flex items-center justify-around md:space-x-20">
                        <img 
                            class=" md:w-1/3 mb-5 md:mb-0"
                            src={VetorIlustrativos}
                            alt="imagem ilustrativa programador e processo de codificacao e conceito de programacao vetor"
                        />

                        <div class="md:text-xl   " >
                            <p >
                                Com {idade} anos e {experiencia}  anos de experiência como desenvolvedor web Full Stack, trago comigo uma paixão contagiante por criar <b>experiências interativas e envolventes na web</b>. Guiado por uma estética minimalista, <b>princípios de design sólido, código limpo</b> e atenção aos detalhes, me dedico a combinar criatividade e habilidades técnicas para construir interfaces intuitivas e visualmente atraentes.
                                Minha busca incessante por novos desafios me impulsiona a expandir meu conhecimento e contribuir para projetos inspiradores. Acredito que a colaboração e a comunicação são essenciais para o sucesso de qualquer projeto, e estou sempre disposto a aprender e compartilhar minhas habilidades.
                            </p>        
                            <br />
                            <h2><b>O que me motiva:</b></h2>

                            <ul class="pl-10">
                                <li class="list-disc">Criar interfaces intuitivas e visualmente atraentes.</li>
                                <li class="list-disc">Resolver problemas complexos com soluções inovadoras.</li>
                                <li class="list-disc">Aprender e crescer como desenvolvedor.</li>
                                <li class="list-disc">Colaborar em projetos inspiradores com pessoas talentosas.</li>
                            </ul><br />
                            
                            <b>Estou sempre buscando novos desafios e oportunidades para aplicar minhas habilidades e conhecimentos.</b> Acredito na <b>colaboração como chave para o sucesso,</b> e estou sempre disposto a aprender e compartilhar ideias com outros desenvolvedores.
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}