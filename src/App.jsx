import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./assets/logo-mangas.png"

function App() {

  return (
    <div className="bg-[url('./assets/background-home.png')] h-screen bg-cover bg-no-repeat">
      {/* SECCION NAVBAR */}
      <nav className='w-full flex justify-between items-center px-[14px] lg:px-[46px] pt-3 lg:pt-[31px]'>
        <a href='#'><AiOutlineMenu className='text-3xl md:text-5xl text-violet-900' /></a>
        <img src={Logo} alt="Logo Mangas" />
      </nav>
      {/* SECCION MAIN */}
      <main className='w-full text-white text-center mt-64 px-[21px] '>
        <h1 className='text-4xl lg:text-5xl font-bold'>Your favorite comic book store</h1>
        <p className='md:hidden text-center mt-6'>From classics to novelties, we have everything you need immerse yourself in your favorite universes. Expore our catalog and livve the adventure of your life.</p>
        <p className='hidden md:block text-2xl mt-4'>Explore our catalog to live the adventure of your life</p>
        <button className='bg-violet-900 w-full max-w-[240px] h-[68px] rounded-full md:rounded-md text-2xl font-bold lg:font-medium mt-6'>Started</button>
      </main>
    </div>
  )
}

export default App
