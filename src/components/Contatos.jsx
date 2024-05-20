import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Contatos(){
    return(

        <div class="space-y-7  fixed top-1/2 tranform -translate-y-1/2 lg:right-5 right-2 items-center justify-center  flex flex-col z-50 ">
            <a href="https://wa.me/5592995238016" target="_blank">
                <IoLogoWhatsapp  class="lg:text-5xl text-4xl text-blue-700 duration-200 hover:scale-110 cursor-pointer" />
            </a>

            <a href="tel:+5592995238016" target="_blank" >
                <FaPhone  class="lg:text-5xl text-4xl text-blue-700 duration-200 hover:scale-110 cursor-pointer m-auto" />
            </a>

        </div>
    )
}