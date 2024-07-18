import Titulo from './Titulo'
import imagemVetor from '../images/homem-que-trabalha-com-a-visao-traseira-do-programador-de-desenvolvimento-de-software-de-script_81894-7230.png'

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { MdDraw } from "react-icons/md";
import { LuFigma } from "react-icons/lu";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";



export default function Habilidades(){
    return(
        <section class="overflow-x-hidden p-5   min-h-screen flex  items-center justify-center" id='habilidades'>
            <div class="ancora mt-10  w-full">
                <Titulo text={'Linguagens, Frameworks e Bibliotecas'}/>

            
                <div class="text-gray-700 grid grid-cols-2 lg:grid-cols-3  ">
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaHtml5 className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">HTML 5</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <IoLogoCss3  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">CSS 3</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <IoLogoJavascript  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">JAVASCRIPT</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaPython  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">PYTHON</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaNode  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">NODE JS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiExpress  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">Express JS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiFastapi  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">FASTAPI</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiTailwindcss  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">TAILWIND</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaBootstrap  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">Bootstrap</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaReact className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">REACT</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiMysql   className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-4xl">MySql</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiMongodb   className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-4xl">MongoDB</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <IoLogoFirebase  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">FIREBASE</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <AiOutlineApi  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">API REST</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiNextdotjs  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">Next JS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <LuFileJson2  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">EJS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <MdDraw  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">CORELDRAW</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <LuFigma  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">Figma</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaGitSquare  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">GIT</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaGithub  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">GITHUB</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaDocker  className='text-4xl lg:text-5xl text-blue-800'  />
                        <p class="font-medium lg:text-xl text-md md:text-3xl">DOCKER</p>
                    </div>

                </div>

                <p className='m-auto  text-center mt-10 text-gray-600'>Estas são algumas das ferramentas nas quais possuo conhecimento e experiência</p>

                <img 
                    src={imagemVetor}
                    class=" w-96 m-auto h-auto mt-2" 
                    alt="imagem ilustrativa" 
                />
            </div>
        </section>
    )
}