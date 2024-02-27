'use client'
import React, { ReactElement, useState } from 'react'

import { SlArrowDown } from "react-icons/sl"
import { SlArrowUp } from "react-icons/sl"

interface AccordionDeclarationCandidateProps {
  description : string
  value : string
  isOpen?: boolean
  children: ReactElement
}

function AccordionDeclarationCandidate({description, value, isOpen= false, children}: AccordionDeclarationCandidateProps) {
  const [isActive, setIsActive] = useState<boolean>(isOpen)

  return (
    <div className={`border-b border-black-10`}>
      <button className='flex flex-row gap-2 justify-between text-left w-full p-4' onClick={() => setIsActive(!isActive)}>
        <h6 className={`text-headline font-semibold font-montserrat block group-hover:text-black-100 ${isActive ? 'text-black-100': 'text-black-75'}`}>{description}</h6>
        <div className='flex-none flex flex-row items-center gap-4'>
          <p className='text-callout font-medium text-black-75'>{value}</p>
          { isActive ? <SlArrowUp className='block text-lg text-black-50'/> : <SlArrowDown className='block text-lg text-black-50'/> }
        </div>
      </button>
      <div className={`overflow-hidden ${isActive ? 'max-h-max' : 'max-h-0' } rounded-b-xl transition delay-1000 duration-700 ease-in-out`}>
        <div className='px-4 pb-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionDeclarationCandidate