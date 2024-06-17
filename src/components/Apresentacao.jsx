import React from 'react';
import MinhaFoto from '../images/eu.png';

//19 de novembro de 2021 - comecei a estudat python no curso em video e nunca mais parei de estudar programação

export default function Apresentacao() {
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

    const experience = calculateExperience('2021-11-09');

    return (
        <div className="md:flex items-center justify-around w-full bg-white lg:py-20 py-10 min-h-screen" id='apresentacao'>
            <div className="container md:w-1/2">
                <div className='text-blue-800 m-auto ml-5'>
                    <h1 className="impact font-black md:text-8xl text-4xl">
                        Desenvolvedor web
                    </h1>
                    <h1 className="impact font-black md:text-9xl text-5xl">
                        FULL STACK
                    </h1>
                    <p className="text-right lg:text-2xl text-lg font-semibold pr-12 text-gray-700 lg:my-10 my-5">
                        Olá, eu sou Gabriel Andrade <br />
                        Desenvolvedor web há mais de {experience.years} anos e {experience.months} meses.
                    </p>
                </div>
                <div className="mt-10 md:w-1/2 m-auto flex justify-around">
                    <div className="border-black border-2 relative w-28 h-10 scale duration-200 hover:scale-110">
                        <a 
                            href="https://api.whatsapp.com/send/?phone=5592995238016&text&type=phone_number&app_absent=0"
                            target="_blank"
                            className="flex items-center justify-center bg-blue-800 font-semibold border-black border-2 text-white w-28 h-10 absolute -top-2 -right-2"
                        >Whatsapp</a>
                    </div>
                    <div className="border-black border-2 relative w-28 h-10 scale duration-200 hover:scale-110">
                        <a 
                            href="http://www.linkedin.com/in/mendonçagabriel" 
                            target="_blank"
                            className="flex items-center justify-center bg-blue-800 font-semibold border-black border-2 text-white w-28 h-10 absolute -top-2 -right-2"
                        >Linkedin</a>
                    </div>
                </div>
            </div>
            {/* FOTO MOBILE */}
            <img 
                src={MinhaFoto} 
                alt="minha foto de perfil"
                className="md:hidden fperfil h-auto w-auto md:static m-auto mt-5" 
            />
            {/* FOTO PC */}
            <img 
                src={MinhaFoto} 
                alt="minha foto de perfil"
                className="fperfil hidden md:flex h-auto md:w-auto w-60 lg:w-96 md:static md:right-auto md:bottom-auto absolute bottom-0 right-5" 
            />
        </div>
    );
}
