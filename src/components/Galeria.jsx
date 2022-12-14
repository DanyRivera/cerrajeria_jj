
const Galeria = () => {
    return (
        <section className='my-16 mx-2 md:mx-24'>
            <h2 className='text-center text-3xl md:text-4xl'>Galería</h2>
            <div className="grid md:grid-cols-4 md:grid-rows-2 gap-2 mt-10">
                <div className="col-span-2 md:col-span-1 md:row-span-2">
                    <img className="w-full h-full md:hover:scale-95 transition-all" src="/img/llavess.jpg" alt="" />
                </div>
                <div className="col-span-2">
                    <img className="w-full h-full md:hover:scale-95 transition-all" src="/img/chapa_2.jpg" alt="" />
                </div>
                <div>
                    <img className="w-full h-full md:hover:scale-95 transition-all" src="/img/llave_3.jpg" alt="" />
                </div>
                
                <div>
                    <img className="w-full h-full md:hover:scale-95 transition-all" src="/img/puerta.jpg" alt="" />
                </div>
                <div className="col-span-2">
                    <img className="w-full h-full md:hover:scale-95 transition-all" src="/img/llaves_2.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Galeria