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




export default function Habilidades(){
    return(
        <section class="overflow-x-hidden p-5 border border-red-500" >
            <div class="ancora mt-16">
                <Titulo text={'MINHAS HABILIDADES TÉCNICAS:'}/>

            
                <div class="text-gray-700 grid grid-cols-2 lg:grid-cols-3  ">
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaHtml5 className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">HTML 5</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaReact className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">REACT</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <IoLogoCss3  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">CSS 3</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiTailwindcss  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">TAILWIND</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <IoLogoJavascript  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">JAVASCRIPT</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <IoLogoFirebase  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">FIREBASE</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <AiOutlineApi  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">API</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <FaBootstrap  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">Bootstrap</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiNextdotjs  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">Next JS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <SiExpress  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">Express JS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <LuFileJson2  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">EJS</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <MdDraw  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">CORELDRAW</p>
                    </div>
                    <div class="m-auto flex items-center justify-start p-2 space-x-4 duration-200 md:w-1/2 w-full">
                        <LuFigma  className='text-5xl text-blue-800'  />
                        <p class="font-medium text-xl md:text-3xl">Figma</p>
                    </div>

                </div>

                <img 
                    src={imagemVetor}
                    class=" w-96 m-auto h-auto mt-2" 
                    alt="imagem ilustrativa" 
                />
            </div>
        </section>
    )
}