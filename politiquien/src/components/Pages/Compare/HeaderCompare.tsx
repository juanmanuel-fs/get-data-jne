'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { SlArrowDown } from 'react-icons/sl'
import SearchModal from './componets/SearchCompare'
import SearchCompare from './componets/SearchCompare'


function HeaderCompare() {
  const [isOpenSearchCompare, setIsOpenSearchCompare] = useState<boolean>(false)
  return (
    <>
      <div className='sticky top-[102px] md:top-40 bg-white-100 pt-4 pb-2 -mt-4 z-10 md:pt-7 md:-mt-7 border-b border-black-10'>
        <div className='flex flex-col gap-2'>
          <h6>COMPARAR CANDIDATO</h6>
          <div className='grid grid-cols-2 gap-4 md:gap-8'>
            <button className='col-span-1 text-left hover:bg-fill-tertiary rounded-lg -mx-2 p-2' onClick={()=> {setIsOpenSearchCompare(true)}}>
              <div className='flex flex-col md:flex-row gap-1 md:gap-2 md:items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <div className='flex-none'>
                    <Image className='bg-black-5 border-none h-12 w-9 md:h-16 md:w-12 rounded-md' src="" alt="" />
                  </div>
                  <div className='h-full truncate'>
                    <h6 className='text-callout md:text-headline font-semibold text-black-75 truncate'>RUBELA JUANA, TREJO MARQUEZ fsaf</h6>
                    <span className='text-subhead text-primary-88 block truncate'>GOBERNADOR REGIONAL</span>
                    <span className='text-subhead text-black-75 hidden md:block uppercase truncate'>Elecciones municipales y regionales 2022</span>
                    <SlArrowDown className='md:hidden flex-none text-subhead mt-1 mx-auto'/>
                  </div>
                </div>
                <SlArrowDown className='hidden md:block flex-none ml-auto'/>
              </div>
            </button>
            <button className='col-span-1 text-left hover:bg-fill-tertiary rounded-lg -mx-2 p-2' onClick={()=> {setIsOpenSearchCompare(true)}}>
              <div className='flex flex-col md:flex-row gap-1 md:gap-2 md:items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <div className='flex-none'>
                    <Image className='bg-black-5 border-none h-12 w-9 md:h-16 md:w-12 rounded-md' src="" alt="" />
                  </div>
                  <div className='h-full truncate'>
                    <h6 className='text-callout md:text-headline font-semibold text-black-75 truncate'>RUBELA JUANA, TREJO MARQUEZ fsaf</h6>
                    <span className='text-subhead text-primary-88 block truncate'>GOBERNADOR REGIONAL</span>
                    <span className='text-subhead text-black-75 hidden md:block uppercase truncate'>Elecciones municipales y regionales 2022</span>
                    <SlArrowDown className='md:hidden flex-none text-subhead mt-1 mx-auto'/>
                  </div>
                </div>
                <SlArrowDown className='hidden md:block flex-none ml-auto'/>
              </div>
            </button>
          </div>
        </div>
        
      </div>
      {
        isOpenSearchCompare && <SearchCompare setIsOpenSearchCompare={setIsOpenSearchCompare}/>
      }
    </>
  )
}

export default HeaderCompare