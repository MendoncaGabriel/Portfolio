import MinhaFoto from '../images/eu.png'

export default function Apresentacao() {
    return (

        <div class="md:flex items-center justify-around w-full  bg-white border border-red-500 py-20">
            <div class="container md:w-1/2">

                <div className='text-blue-800'>

                    <h1 class="impact font-black md:text-8xl  text-6xl text-c1">
                        Deselvolvedor web
                    </h1>
                    <h1 class="impact font-black md:text-9xl  text-7xl text-c1">
                        FULL STACK
                    </h1>

                    <p class="text-right text-2xl font-semibold md:pr-12 text-gray-700 my-10">
                        Olá, eu sou Gabriel Andrade <br />
                        Desenvolvedor web a mais de 2 anos.
                    </p>

                </div>

                <div class="mt-10 md:w-1/2 m-auto flex justify-around">
                    <div class="border-black border-2 relative w-28 h-10 scale duration-200 hover:scale-110">
                        <a 
                            href="https://api.whatsapp.com/send/?phone=5592995238016&text&type=phone_number&app_absent=0"
                            target="_blank"
                            class="flex items-center justify-center bg-blue-800 font-semibold   border-black border-2 text-white w-28 h-10 absolute -top-2 -right-2 "
                        >Whatsapp</a>
                    </div>

                    <div class="border-black border-2 relative w-28 h-10 scale duration-200 hover:scale-110">
                        <a 
                            href="https://www.linkedin.com/in/mendon%C3%A7agabriel97/" 
                            target="_blank"
                            class="flex items-center justify-center bg-blue-800 font-semibold   border-black border-2 text-white w-28 h-10 absolute -top-2 -right-2 "
                        >Linkedin</a>
                    </div>
                </div>
            </div>

            {/* <!-- FOTO MOBILE --> */}
            <img 
                src={MinhaFoto} 
                alt=" minha foto de perfil"
                class="md:hidden fperfil h-auto w-auto md:static m-auto mt-5" 
            />

            {/* <!-- FOTO PC --> */}
            <img 
                src={MinhaFoto} 
                alt=" minha foto de perfil"
                class="fperfil hidden md:flex h-auto md:w-auto w-60 lg:w-96  md:static md:right-auto md:bottom-auto absolute bottom-0 right-5" 
            />
        </div>
    )
}