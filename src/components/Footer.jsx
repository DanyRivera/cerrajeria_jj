import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    const date = new Date();
    const currentDate = date.getFullYear();

    return (
        <footer className="bg-gray-200 py-8">
            <div className="md:mx-24 md:flex justify-between items-center text-white">
                <p className="text-center md:text-xl text-gray-500" >&copy; {currentDate} Panadería Todos los derechos Reservados</p>
                <nav className="flex justify-center mt-5 md:mt-0 gap-10 text-3xl text-gray-500">
                    <a className="cursor-pointer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a className="cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className="cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer