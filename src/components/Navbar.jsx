
export default function Navbar() {
    return(
        <section class="overflow-x-hidden bg-c1 flex items-center md:justify-between justify-around p-3 lg:px-20 lg:py-4 fixed top-0 w-full z-10 bg-blue-800 font-semibold z-50">

            <h1 class="text-white minecraft text-2xl">GABRIEL ANDRADE</h1>

            <span className="w-10 h-10 bg-center bg-cover md:hidden" style={{ backgroundImage: 'url("icons/icons8-cardápio-100.png")' }}></span>

            <nav class="text-white minecraft gap-3 text-lg hidden md:flex">
                <a href="#home" class="hover:text-yellow-500"  >HOME</a>
                <a href="#sobre" class="hover:text-yellow-500  " >SOBRE</a>
                <a href="#habilidades" class="hover:text-yellow-500" >HABILIDADES</a>
                <a href="#projetos" class="hover:text-yellow-500" >PROJETOS</a>
                <a href="#contato" class="hover:text-yellow-500" >CONTATO</a>
            </nav>
        </section>
    )
}