import React, { Dispatch, ReactElement, SetStateAction, useEffect, useRef } from 'react'
import { CgClose } from 'react-icons/cg'

interface GeneralModalProps {
  title: string
  children : ReactElement
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}


function GeneralModal({title, children, open, setOpen}: GeneralModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const staticScreem = document.querySelector('body')
    staticScreem?.classList.add('overflow-hidden')

    return () => {
      staticScreem?.classList.remove('overflow-hidden')
    }
  },[])

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", checkIfClickedOutside, true)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true)
    }
  },[])

  return (
    <div className="fixed z-50 flex justify-center left-0 right-0 top-0 bottom-0 pb-[20%] w-screen h-screen bg-black-50">
      <div className="fixed top-0 sm:top-[20%] flex flex-col w-screen  sm:max-w-[720px] h-screen sm:h-auto max-h-[800px] p-4 bg-white-100 md:rounded-xl overflow-auto" ref={modalRef}>
        <div className=' flex flex-row justify-between items-center'>
          <h2 className='text-title3 text-primary-88'>{title}</h2>
          <button className="" onClick={() => setOpen(false)}>
            <CgClose className='text-black-50 hover:text-primary-75 text-3xl transition ease-in-out delay-150 duration-300 hover:rotate-90'/>
          </button>
        </div>
        <div className="my-4 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default GeneralModal