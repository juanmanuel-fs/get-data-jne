import React from 'react'

function CardArticle() {
  return (
    <div className='group border border-black-5 bg-fill-quaternary py-4 px-6 hover:bg-primary-5 hover:border-primary-22'>
      <div className='flex flex-col sm:flex-row gap-2 md:gap-4 aspect-1 sm:aspect-10 items-center cursor-pointer select-none'>
        <img className='flex-none h-16 sm:h-14 mt-2 sm:mt-0' src="examples/donde_votar.jpeg" alt="" />
        <h6 className='text-subhead font-bold text-black-75 group-hover:text-primary-88 text-center sm:text-start'> ¿EN QUÉ CASOS HABRÁ SEGUNDA VUELTA EN ESTAS ELECCIONES?</h6>
      </div>
    </div>
  )
}

export default CardArticle