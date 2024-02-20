import iconGitHub from '../icons/icons8-github-100.png'
import iconGmail from '../icons/icons8-gmail-100.png'
import iconTelefone from '../icons/icons8-telefone-100.png'

export default function Contatos(){
    return(

        <div class="space-y-4 space-x-5 md:space-x-0  md:fixed bottom-5 right-5 items-center justify-center  flex md:flex-col md:bg-transparent bg-white rounded-2xl mt-5">

            <a href="https://github.com/MendoncaGabriel" target="_blank" className='duration-200 hover:scale-110'>
                <img src={iconGitHub} alt="icone github" class="w-9 scale duration-200 cursor-pointer " />
            </a>

            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mendoncagabril@gmail.com" target="_blank" className='duration-200 hover:scale-110'>
                <img src={iconGmail} alt="icone gmail" class="w-9 scale duration-200 cursor-pointer" />
            </a>

            <a href="tel:+5592995238016" target="_blank" className='duration-200 hover:scale-110'>
                <img src={iconTelefone} alt="icone telefone" class="w-9 scale duration-200 cursor-pointer" />
            </a>

        </div>
    )
}