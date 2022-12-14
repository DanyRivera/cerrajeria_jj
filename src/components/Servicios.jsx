import React from 'react'

const Servicios = () => {

    const servicios = [
        'Programación de Llaves',
        'Programación de Llaves',
        'Programación de Llaves',
        'Programación de Llaves',
        'Programación de Llaves',
        'Programación de Llaves'
    ]

    return (
        <section className='my-16 mx-5 md:mx-24' id='servicios'>
            <h2 className='text-center text-3xl md:text-4xl'>Servicios</h2>
            <div className='grid gap-5 md:gap-12 mt-10 md:grid-cols-3'>
                {servicios.map((servicio, index) => (
                    <div key={index} className="border p-5 border-l-4 border-gray-400" >
                        <p className='md:text-xl'>{servicio}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Servicios