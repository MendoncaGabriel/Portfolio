import { useState, useEffect } from "react";
import VetorIlustrativos from '../images/programador-e-processo-de-codificacao-e-conceito-de-programacao-vetor_272930-2.png';
import Titulo from "./Titulo";

export default function SobreMin() {
    const [idade, setIdade] = useState(0);
    const [experiencia, setExperiencia] = useState({ years: 0, months: 0 });

    useEffect(() => {
        const birthYear = 1997;
        const startYear = 2021;
        const currentYear = new Date().getFullYear();
        
        setIdade(currentYear - birthYear);
        setExperiencia(calculateExperience('2021-11-09'));
    }, []);

    const calculateExperience = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months };
    }

    return (
        <>
            <section className="p-5 md:p-20 md:pt-5 text-gray-700 min-h-screen flex justify-center items-center" id="sobre">
                <div className="mt-16">
                    <Titulo text="SOBRE MIN" />
                    <div className="md:flex items-center justify-around md:space-x-20 mt-10">
                        <img
                            className="md:w-1/3 mb-5 md:mb-0"
                            src={VetorIlustrativos}
                            alt="imagem ilustrativa programador e processo de codificacao e conceito de programacao vetor"
                        />
                        <div className="md:text-xl">
                            <p>
                                Com {idade} anos e {experiencia.years} anos e {experiencia.months} meses de experiência como desenvolvedor web Full Stack, trago comigo uma paixão contagiante por criar <b>experiências interativas e envolventes na web</b>. Guiado por uma estética minimalista, <b>princípios de design sólido, código limpo</b> e atenção aos detalhes, me dedico a combinar criatividade e habilidades técnicas para construir interfaces intuitivas e visualmente atraentes.
                                Minha busca incessante por novos desafios me impulsiona a expandir meu conhecimento e contribuir para projetos inspiradores. Acredito que a colaboração e a comunicação são essenciais para o sucesso de qualquer projeto, e estou sempre disposto a aprender e compartilhar minhas habilidades.
                            </p>
                            <br />
                            <h2><b>O que me motiva:</b></h2>
                            <ul className="pl-10">
                                <li className="list-disc">Criar interfaces intuitivas e visualmente atraentes.</li>
                                <li className="list-disc">Resolver problemas complexos com soluções inovadoras.</li>
                                <li className="list-disc">Aprender e crescer como desenvolvedor.</li>
                                <li className="list-disc">Colaborar em projetos inspiradores com pessoas talentosas.</li>
                            </ul>
                            <br />
                            <b>Estou sempre buscando novos desafios e oportunidades para aplicar minhas habilidades e conhecimentos.</b> Acredito na <b>colaboração como chave para o sucesso,</b> e estou sempre disposto a aprender e compartilhar ideias com outros desenvolvedores.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
