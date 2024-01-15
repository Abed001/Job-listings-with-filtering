import React from 'react'

export default function Card({ card, addFilter }) {
    return (
        <>

            <div className=' w-[100%] flex flex-col justify-center items-center lg:justify-center lg:items-center'>
                <section className=' mt-10 shadow-lg mb-10 bg-white rounded-lg border-l-[5px] border-blue-500 relative flex flex-col items-center p-5 w-[90%] min-h-[300px] lg:justify-between lg:flex-row lg:w-[90%] lg:min-h-[120px]' key={card.id}>
                    <div className='w-[100%] flex flex-start mt-5 lg:mt-0 '>
                        <article className='border-b-[2px] border-gray-400 lg:border-0 w-[100%] '>
                            <figure className='flex flex-col lg:items-center lg:flex-row lg:justify-start'>
                                <img className='absolute border-10 border-blue-500 w-11 h-11 top-[-20px] left-5 lg:hidden md:hidden' src={card.logo} alt="Photosnap logo" />
                                <img className='w-[100%] phonehidden lg:block lg:w-[100px] lg:h-[100px]' src={card.logo} alt="Photosnap logo" />
                                <div className='flex flex-col lg:ml-[30px]'>
                                    <figcaption className='flex flex-row mb-5 lg:mb-0 gap-x-3'>
                                        <h3 className=' text-cyanbluecolor font-bold text-[20px]'>{card.company}</h3>
                                        {card.new ? (<span className='flex justify-center items-center bg-cyanbluecolor rounded-full h-7 w-9 px-7  text-white text-center font-bold'>New!</span>) : null}
                                        {card.featured ? (<span className='flex justify-center items-center bg-VeryDarkGrayishCyan rounded-full h-7 w-9 px-11  text-white text-center font-bold'>Featured!</span>) : null}
                                    </figcaption>

                                    <figcaption className='flex flex-row mb-5 lg:mb-0'>
                                        <p className=' text-black font-bold text-[20px]'>{card.position}</p>
                                    </figcaption>

                                    <figcaption className=' flex flex-row items-center text-gray-500  gap-x-5 mb-5 text-[20px]'>
                                        <p>{card.postedAt}</p>
                                        <span className='bg-DarkGrayishCyan rounded-full  w-[5px] h-[5px] '></span>
                                        <p>{card.contract}</p>
                                        <span className='bg-DarkGrayishCyan rounded-full  w-[5px] h-[5px] '></span>
                                        <p>{card.location}</p>
                                    </figcaption>
                                </div>
                            </figure>
                        </article>
                    </div>

                    <div className=' w-[100%] text-left grid grid-cols-3 lg:grid-cols-5 mt-5 lg:mt-0 gap-y-5 font-bold  '>
                        <button className={`w-20 bg-lightblue rounded-md text-cyanbluecolor p-1 text-center hover:text-white hover:bg-cyanbluecolor transition-all duration-300`}
                            onClick={() => addFilter(card.role)}>{card.role}</button>

                        <button className='w-20  bg-lightblue rounded-md text-cyanbluecolor p-1 text-center hover:text-white hover:bg-cyanbluecolor transition-all duration-300' onClick={() => addFilter(card.level)}>{card.level}</button>
                        {card.languages.map((language) => (
                            <button key={language} className="language-button w-[80px] bg-lightblue rounded-md text-cyanbluecolor p-1 text-center hover:text-white hover:bg-cyanbluecolor transition-all duration-300" onClick={() => addFilter(language)}>{language}</button>
                        ))}
                    </div>
                </section >
            </div >



        </>
    )
}
