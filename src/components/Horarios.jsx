import React from 'react'

const Horarios = () => {

    const horarios = [
        { dia: 'Lunes', hora: '8:30 - 20:00' },
        { dia: 'Martes', hora: '8:30 - 20:00' },
        { dia: 'Miércoles', hora: '8:30 - 20:00' },
        { dia: 'Jueves', hora: '8:30 - 20:00' },
        { dia: 'Viernes', hora: '8:30 - 20:00' },
        { dia: 'Sábado', hora: '8:30 - 20:00' },
        { dia: 'Domingo', hora: '9:00 - 18:00' },
    ]

    return (
        <section className='my-16' id='horario'>
            <h2 className='text-center text-3xl md:text-4xl'>Horarios</h2>
            <div className='horarios mt-10'>
                <div className='md:mr-32 flex justify-center md:justify-end items-center h-full text-white'>
                    <ul className='grid lg:grid-cols-2 gap-6 md:gap-10'>
                        {horarios.map(({dia, hora}, index) => (
                            <li key={index} className='flex gap-3 text-lg md:text-3xl'>
                                <span className='font-bold'>{dia}:</span>
                                <p>{hora}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
    )
}

export default Horarios