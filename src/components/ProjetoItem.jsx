
import { FaGithub } from "react-icons/fa";

export default  function ProjetoItem({img, titulo, verProjeto, gitHubProjeto, descricao}){
    return(

        <div class="bg-blue-700 w-72 h-96 rounded-lg relative  flex-none">
            <div class="bg-white w-72 h-96  rounded-lg border-black border-2 absolute -top-2 -right-2 px-2 py-4 flex flex-col justify-between ">

                <img src={img} alt="imagem do projeto" className="w-auto h-[50%] object-cover  " />
                <h2 class="text-base font-bold text-blue-700">{titulo}</h2>
                <p className="text-sm text-gray-600  leading-4">{descricao}</p>
    
                <div class="flex items-center justify-around h-auto   w-full">

                    <div class={`${!verProjeto || verProjeto == "" ? 'hidden': '' } border-black border-2 bg-white w-32 h-9 scale relative duration-200 hover:scale-110`}>
                        <a 
                            href={verProjeto}
                            target="_blank"
                            class="bg-blue-700  border-black border-2 text-white w-32 h-9 absolute -top-2 -right-2 minecraft items-center flex justify-center"
                            aria-label="ver pagina do projeto"
                        >VER PROJETO</a>
                    </div>

 
                    <a 
                        href={gitHubProjeto}
                        target="_blank" 
                        aria-label="Ver código do projeto no github"
                        className=" duration-200 hover:scale-110"
                    >
                        <FaGithub className="text-5xl text-blue-700 "/>
                    </a>
                </div>
            </div>
        </div>
    
    )
}