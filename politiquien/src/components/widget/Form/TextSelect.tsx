import React, { useEffect, useRef, useState } from 'react'

import { SlArrowDown } from "react-icons/sl"

interface TextSelectProps<T> {
  placeholder: string
  value?: number
  name?: string 
  change: Function
  options: T[]
}


function TextSelect<T>({placeholder, options, value, change, name= ''}: TextSelectProps<T>) {
  const [openOption, setOpenOption] = useState<boolean>(false)
  const [currentSelected, setCurrentSelected] = useState<T>({} as T)
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

  useEffect(() => {
    setCurrentSelected(options.find((option: T) => option.id == value))
    console.log(currentSelected)
  },[value])

  return (
      <div className=''>
        <div className={`flex flex-row justify-between items-center gap-2 cursor-pointer select-none`} onClick={() => setOpenOption(!openOption)}>
          {
            !!value
            ? <p className='block text-headline text-white-75 font-medium max-w-[170px] sm:max-w-[320px] truncate'>{ currentSelected.name }</p>
            : <p className='block text-headline text-white-50 truncate'>{ placeholder }</p>
          }
          <SlArrowDown className='text-white-100 font-semibold text-headline'/>
        </div>
          {
            openOption &&
              <div className="relative">
                <div className="absolute z-50 w-full min-w-[320px] right-0 max-h-96 overflow-y-auto ring-1 ring-black-5 bg-white-75 backdrop-blur-30 rounded-xl py-2 shadow-2xl translate-y-3 ease-out duration-500 " ref={selectRef}>
                  <ul>
                    {
                      !!options.length 
                      ? options?.map((option, index ) =>
                          {
                            return ( 
                              <li className={`px-5 py-2 cursor-pointer hover:bg-fill-tertiary ${currentSelected.id == option.id && 'text-primary-88 bg-fill-tertiary'}`} key={option.id} onClick={()=> {handleClick(option.id)}}>
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
  )
}

export default TextSelect