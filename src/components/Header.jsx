import { useState } from "react"
import { Link } from "react-scroll";
import Menu from "./Menu";

const Header = () => {

    const [mostrar, setMostrar] = useState(false);

    return (
        <>

            <Menu mostrar={mostrar} setMostrar={setMostrar} />

            <header className="md:grid md:grid-cols-3 bg-gray-200 pt-8 pb-14">
                <nav className="hidden md:flex flex-col justify-around items-center">
                    <Link
                        className="efecto border font-bold text-gray-600 border-gray-400 px-28 py-4 text-xl rounded-md cursor-pointer uppercase"
                        to="servicios"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                    >Servicios</Link>
                    <Link
                        className="efecto border font-bold text-gray-600 border-gray-400 px-28 py-4 text-xl rounded-md cursor-pointer uppercase"
                        to="horario"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                    >Horario</Link>
                </nav>
                <div>
                    <div className="mb-5 flex flex-col gap-5 justify-center items-center">
                        <h1 className="text-4xl md:text-8xl leading-normal tracking-wide text-center px-20 uppercase">Cerrajería "J & J"</h1>
                        <button
                            className="md:hidden"
                            onClick={() => setMostrar(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                        <p className="text-xl text-center w-52 md:w-1/2 md:text-2xl">Todo sobre cerrajería con nosotros</p>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-1/3" src="/img/llaves.png" alt="" />
                    </div>
                </div>
                <nav className="hidden md:flex flex-col justify-around items-center">
                    <Link
                        className="efecto border font-bold text-gray-600 border-gray-400 px-28 py-4 text-xl rounded-md cursor-pointer uppercase"
                        to="ubicacion"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                    >Ubicación</Link>
                    <Link
                        className="efecto border font-bold text-gray-600 border-gray-400 px-28 py-4 text-xl rounded-md cursor-pointer uppercase"
                        to="contacto"
                        smooth={true}
                        duration={1000}
                        offset={-100}
                    >Contacto</Link>
                </nav>
            </header>
        </>
    )
}

export default Header