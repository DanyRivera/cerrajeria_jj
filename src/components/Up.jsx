import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll"

const Up = () => {

    const [offsetY, setOffsetY] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    const handleScroll = () => {
        setOffsetY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (offsetY > 105) {
            setMostrar(true);
        } else {
            setMostrar(false);
        }
    }, [offsetY])

    return (
        <button
            aria-label="menu"
            className={`${mostrar ? 'mostrar-up' : 'ocultar-up'} fixed bottom-2 right-2 md:bottom-10 md:right-6 outline-none z-20`}
            onClick={() => scroll.scrollToTop()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-gray-300 text-gray-500 p-3 rounded-full shadow-2xl">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    )
}

export default Up