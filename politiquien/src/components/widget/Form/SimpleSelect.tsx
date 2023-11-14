import React, { useEffect, useRef, useState } from 'react'

import { SlArrowDown } from "react-icons/sl"

interface SimpleSelectProps<T> {
  placeholder: string
  value?: number
  name?: string 
  change: Function
  options: T[]
}


function SimpleSelect<T>({placeholder, options, value, change, name= ''}: SimpleSelectProps<T>) {
  const [openOption, setOpenOption] = useState<boolean>(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleClick = (id: number) =>{
    change(id, name)
    setOpenOption(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
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
        <div className={`relative rounded-xl bg-fill-tertiary  px-4 lg:px-6 pr-10 lg:pr-12 py-[10px] lg:py-[14px] cursor-pointer select-none ${ openOption && 'ring-1 ring-black-10 bg-fill-quaternary'}`} onClick={() => setOpenOption(!openOption)}>
          {
            !!value
            ? <span className='block text-headline text-black-88 truncate'>{ options?.find(option => option.id === value).name }</span>
            : <span className='block text-headline text-black-50 truncate'>{ placeholder }</span>
          }
          <SlArrowDown className='absolute right-0 top-[14px] lg:top-[18px] mr-4 '/>
        </div>
          {
            openOption &&
              <div className="relative">
                <div className="absolute z-50 w-full max-h-96 overflow-y-auto ring-1 ring-black-5 bg-white-75 backdrop-blur-30 rounded-xl py-2 shadow-2xl translate-y-3 ease-out duration-500 " ref={selectRef}>
                  <ul>
                    {
                      !!options.length 
                      ? options?.map((option, index ) =>
                          {
                            return ( 
                              <li className={`px-5 py-2 cursor-pointer hover:bg-fill-tertiary ${value == option.id && 'text-primary-88 bg-fill-tertiary'}`} key={option.id} onClick={()=> {handleClick(option.id)}}>
                                <span className='text-body'>{option.name}</span>
                              </li>
                            )
                          }
                        )
                      : <li className={`px-5 py-2 select-none`}>
                          <span className='text-gray-400 text-body'>No se encontró datos</span>
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