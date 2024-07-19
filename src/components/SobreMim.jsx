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
                    <Titulo text="SOBRE MIM" />
                    <div className="md:flex items-center justify-around md:space-x-20 mt-10">
                        <img
                            className="md:w-1/3 mb-5 md:mb-0"
                            src={VetorIlustrativos}
                            alt="imagem ilustrativa programador e processo de codificacao e conceito de programacao vetor"
                        />
                        <div className="md:text-xl">

                            <p>
                                Com {experiencia.years} anos e {experiencia.months} meses de experiência, dedico-me diariamente a ser um excelente profissional, aprendendo constantemente e enfrentando novos desafios. Ao longo da minha trajetória, desenvolvi minhas habilidades autodidatas, absorvendo conceitos importantes para a resolução de problemas em projetos de freelancer. <br /><br />

                                Tenho uma forte inclinação para o código limpo, orientação a objetos e design patterns, como <b>MVC, Observer, Factory, programação modular e DDD.</b> Acredito que essas práticas são aliadas valiosas no desenvolvimento ágil de software. <br /><br />

                                Particularmente, aprecio não apenas o clean code, mas também interfaces limpas e eficientes. Em meus <b>mais de 100 repositórios no GitHub</b>, busco constantemente aprimorar o desenvolvimento de interfaces objetivas, robustas e intuitivas. <br /><br />

                                No lado backend, <b>costumo desenvolver em Node.js e Express, criando APIs RESTful utilizando o modelo MVC.</b> Em relação a bancos de dados, utilizo <b>Firebase, MongoDB e MySQL</b>, dependendo dos requisitos do sistema. <br /><br />

                                Este é um breve resumo sobre mim e meus interesses no desenvolvimento web. Se você quiser saber mais, entre em contato! Até mais!
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
