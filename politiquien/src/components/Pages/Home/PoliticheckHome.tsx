'use client'
import Link from 'next/link'

import { GoArrowRight } from "react-icons/go";
import CardPoliticheck from './components/CardPoliticheck';

function PoliticheckHome() {

  return (
    <div>
      <div className='flex flex-row justify-between items-end mb-4'>
        <h2 className='text-title2'>POLITICHECK</h2>
        <Link href='' className='text-primary-75 hover:text-primary-100'>
          <span className='flex gap-2 items-center font-medium'>
            Ver más <GoArrowRight className='text-2xl'/>
          </span>
          </Link>
      </div>
      <div className="relative rounded-xl overflow-auto">
        <div className="relative w-full flex gap-2 md:gap-4 snap-x snap-mandatory overflow-x-auto pb-4">
          <CardPoliticheck/>
          <CardPoliticheck/>
          <CardPoliticheck/>
          <CardPoliticheck/>
          <CardPoliticheck/>
          <CardPoliticheck/>
        </div>
      </div>
    </div>
  )
}

export default PoliticheckHome