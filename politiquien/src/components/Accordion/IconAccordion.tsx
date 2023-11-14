'use client'

import React, { ReactElement, useState } from 'react'

import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";

interface IconAccordion {
  title: string
  children: ReactElement
}

function IconAccordion({title, children}: IconAccordion) {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className=''>
      <button 
        className={`flex justify-between items-center py-2 w-full hover:text-white-100 ${isActive ? 'text-white-100': 'text-white-75'}`} 
        onClick={() => setIsActive(!isActive)}>
        <span className={`font-montserrat text-headline block}`}>{title}</span>
        { isActive ? <RiSubtractLine/> : <AiOutlinePlus/> }
      </button>
      <div className={`px-4 overflow-hidden ${isActive ? 'max-h-max' : 'max-h-0' } transition delay-1000 duration-700 ease-in-out`}>
        <div className='pb-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default IconAccordion