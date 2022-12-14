import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contacto = () => {
    return (
        <section className='my-16 mx-5 md:mx-24' id="contacto">
            <h2 className='text-center text-3xl md:text-4xl'>Contacto</h2>
            <nav className="mt-10 flex flex-col items-center gap-10 md:flex-row justify-around md:my-18">
                <a>
                    <FontAwesomeIcon className="w-14 h-14 text-gray-400 md:w-20 md:h-20 md:hover:text-gray-600 cursor-pointer transition-all" icon={faWhatsapp} />
                </a>
                <a>
                    <FontAwesomeIcon className="w-14 h-14 text-gray-400 md:w-20 md:h-20 md:hover:text-gray-600 cursor-pointer transition-all" icon={faInstagram} />
                </a>
                <a>
                    <FontAwesomeIcon className="w-14 h-14 text-gray-400 md:w-20 md:h-20 md:hover:text-gray-600 cursor-pointer transition-all" icon={faFacebookF} />
                </a>
                <a>
                    <FontAwesomeIcon className="w-14 h-14 text-gray-400 md:w-20 md:h-20 md:hover:text-gray-600 cursor-pointer transition-all" icon={faEnvelope} />
                </a>
            </nav>
        </section>
    )
}

export default Contacto