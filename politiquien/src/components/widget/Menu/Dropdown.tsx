'use client'

import React, { ReactElement, useEffect, useRef, useState } from 'react'

interface DropdownInterface {
  children: ReactElement[]
  icon: ReactElement
}

function Dropdown({children, icon}: DropdownInterface) {
  const modalRef = useRef<HTMLDivElement>(null)

  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false)

  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown)
  
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpenDropdown(false)
      }
    }
    document.addEventListener('click', checkIfClickedOutside, true)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside, true)
    }
  },[])
  
  return (
    <div className="relative" ref={modalRef}>
      <button className="p-0 text-gray-600 hover:text-gray-700" onClick={toggleDropdown}>
        {icon}
      </button>
    
      {
        isOpenDropdown &&
          <div className="absolute w-56 end-0 rounded-md border bg-white-100 border-gray-100 bg-white shadow-lg z-10" >
            <div className="p-2" onClick={() => setIsOpenDropdown(false)}>
              {children}
            </div>
          </div>
      }
    </div>
  )
}
export default Dropdown
