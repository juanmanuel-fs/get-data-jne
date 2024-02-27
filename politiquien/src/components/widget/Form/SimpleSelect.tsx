'use client'

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

import { SelectModel } from '@/model'

import { BiSearch } from 'react-icons/bi'
import { SlArrowDown } from "react-icons/sl"

interface SimpleSelectProps {
  placeholder: string
  value?: number | string
  name?: string 
  change: Function
  disabled?: boolean
  options: SelectModel[]
}

function SimpleSelect({placeholder, options, value, change, name= '', disabled= false}: SimpleSelectProps) {
  const [openOption, setOpenOption] = useState<boolean>(false)
  const [filter, setFilter] = useState<SelectModel[]>(options)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    filterSearch(e.target.value)
  }

  const handleClick = (id: number | string) =>{
    change(id, name)
    setFilter(options)
    setOpenOption(false)
  }

  const filterSearch = (value: string) => {
    let filtered = options.filter(option => option.name.replace(' ', '').includes(value.toUpperCase().trim().replace(' ', '')))
    setFilter(filtered)
  }

  useEffect(() => {
    const staticScreem = document.querySelector('body')
    staticScreem?.classList.add('overflow-hidden')

    return () => {
      staticScreem?.classList.remove('overflow-hidden')
    }
  },[])

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setFilter(options)
        setOpenOption(false)
      }
    }
    document.addEventListener("click", checkIfClickedOutside, true)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true)
    }
  },[])

  return (
    <div className="relative flex flex-col gap-4 min-w-[200px]" >
      <div className=''>
        <div className={`relative rounded-xl bg-fill-tertiary  px-4 lg:px-6 pr-10 lg:pr-12 py-[10px] lg:py-[14px] cursor-pointer select-none ${ openOption && 'ring-1 ring-black-10 bg-fill-quaternary'}`} onClick={() => !disabled && setOpenOption(!openOption)}>
          {
            !!value
            ? <span className='block text-headline text-black-88 truncate'>{ options.find(option => option.id === value)?.name }</span>
            : <span className='block text-headline text-black-50 truncate'>{ placeholder }</span>
          }
          <SlArrowDown className='absolute right-0 top-[13px] lg:top-[16px] mr-4 '/>
        </div>
        {
          openOption &&
            <div className="relative">
              <div className="absolute z-50 w-full ring-1 ring-black-5 bg-white-100 rounded-xl px-2 shadow-2xl translate-y-3 ease-out duration-500 " ref={selectRef}>
                <div className='absolute top-0 right-0 left-0 py-2 px-2 bg-white-100 rounded-t-xl border-b border-black-5'>
                  <div className='flex flex-row gap-2 items-center border border-black-10 rounded-lg px-3 py-[6px]'>
                    <BiSearch className='flex-none text-black-50'/>
                    <input className='text-subhead w-full bg-white-100' type="search" onChange={(e) => handleChange(e)} placeholder='Buscar'/>
                  </div>
                </div>
                <ul className='flex flex-col gap-1 z-20 max-h-64 overflow-auto no-scrollbar pt-14 pb-2'>
                  
                  {
                    !!filter.length 
                    ? filter.map((option, index ) =>
                        {
                          return ( 
                            <li className={`px-3 py-1 rounded-lg cursor-pointer hover:bg-fill-tertiary ${value == option.id && 'text-primary-88 bg-fill-tertiary'}`} key={option.id} onClick={()=> {handleClick(option.id)}}>
                              <span className='text-subhead'>{option.name}</span>
                            </li>
                          )
                        }
                      )
                    : <li className={`px-4 py-2 select-none`}>
                        <span className='text-gray-400 text-subhead'>No se encontró datos</span>
                      </li>
                  } 
                </ul>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default SimpleSelect