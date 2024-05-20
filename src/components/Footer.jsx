import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Footer(){
    return(
        <>
        <section class="p-5 py-10 text-gray-700 min-h-screen flex items-center justify-center"  >
            <div >
                
                {/* Agradecimentos */}
                <div class="md:p-10  md:m-0 mb-10   m-auto block ">
                    <div class="max-w-4xl m-auto ">
                        
                        <h2  class="impact font-black md:text-8xl text-4xl text-5x1 text-blue-700">
                            OBRIGADO <br />
                            POR CHEGAR ATE AQUI!
                        </h2>
                        <br />
                        <p class="text-right md:text-2xl text-lg  font-semibold md:pr-12">
                            Para contratar qualquer serviço basta entrar em contato comigo pelas
                            redes sociais abaixo ou pelo whatsapp!
                        </p>
                    </div>
                </div>
                
                
                <p class="text-center text-xl font-semibold md:mb-0 mb-10">Te vejo em breve!</p>
                
                {/* <!-- CONTATOS --> */}
                <div class="my-10" id="contato">

                    <div data-aos="fade-up" class="flex m-auto md:w-60 w-full justify-center mt-5 space-x-5">
                        <button onclick="copyToClipboard(`github.com/MendoncaGabriel`, 'Link copiado!')">
                            <FaGithub className="text-5xl text-blue-700 duration-200 hover:scale-110 " />
                        </button>
                        
                        <button onclick="copyToClipboard('http://www.linkedin.com/in/mendonçagabriel', 'Perfil linkedin copiado!')">
                            <FaLinkedin className="text-5xl text-blue-700 duration-200 hover:scale-110 " />
                        </button>
                        
                        <button onclick="copyToClipboard('mendoncagabriel1997@gmail.com', 'E-mail copiado!')">
                            <BiLogoGmail className="text-5xl text-blue-700 duration-200 hover:scale-110 " />
                        </button>
                        
                        <button onclick="copyToClipboard('92995238016', 'Telefone copiado!')">
                            <FaPhone className="text-5xl text-blue-700 duration-200 hover:scale-110 " />
                        </button>
                        
                        <button onclick="copyToClipboard('92995238016', 'Whatsapp copiado!')">
                            <IoLogoWhatsapp className="text-5xl text-blue-700 duration-200 hover:scale-110 " />
                        </button>
                    </div>
                    <p class="text-center text-lg mt-2">Clique nos icones para copiar o contato</p>
                </div>
                
            </div>
        </section>
        <footer>
            <h3 class="text-center">
                © Gabriel Andrade - Desenvolvedor web
            </h3>
        </footer>
        </>
    )
}