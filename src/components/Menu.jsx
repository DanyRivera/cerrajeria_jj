import { Link } from "react-scroll"

const Menu = ({setMostrar, mostrar}) => {
    return (
        <div className={`${mostrar ? 'mostrar' : 'ocultar'} md:hidden fixed bg-gray-300 h-screen w-full z-30`}>

            <div className="text-white flex justify-end m-4">
                <button
                    onClick={() => setMostrar(false)}
                    aria-label="cerrar-menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            <nav className="flex flex-col">
                <Link
                    onClick={() => setMostrar(false)}
                    className="font-raleway font-medium text-gray-500 py-8 pl-8 y cursor-pointer"
                    to="servicios"
                    smooth={true}
                    duration={1000}
                    offset={-100}
                >Servicios</Link>
                <Link
                    onClick={() => setMostrar(false)}
                    className="font-raleway font-medium text-gray-500 py-8 pl-8 b cursor-pointer"
                    to="horario"
                    smooth={true}
                    duration={1000}
                    offset={-100}
                >Horario</Link>
                <Link
                    onClick={() => setMostrar(false)}
                    className="font-raleway font-medium text-gray-500 py-8 pl-8 b cursor-pointer"
                    to="ubicacion"
                    smooth={true}
                    duration={1000}
                    offset={-100}
                >Ubicación</Link>
                <Link
                    onClick={() => setMostrar(false)}
                    className="font-raleway font-medium text-gray-500 py-8 pl-8 b cursor-pointer"
                    to="contacto"
                    smooth={true}
                    duration={1000}
                    offset={-100}
                >Contacto</Link>
            </nav>
        </div>

    )
}

export default Menu