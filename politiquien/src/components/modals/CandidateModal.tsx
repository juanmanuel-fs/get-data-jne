import React, { Dispatch, ReactElement, SetStateAction, useEffect, useRef } from 'react'
import { CgClose } from 'react-icons/cg'

interface GeneralModalProps {
  title: string
  count? : number
  primary? : string
  secondary? : string
  totalSecondary?: number
  children : ReactElement
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}


function GeneralModal({title, count = 0, primary, secondary, totalSecondary= 0, children, open, setOpen}: GeneralModalProps) {
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
    document.addEventListener('click', checkIfClickedOutside, true)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside, true)
    }
  },[])

  return (
    <div className='fixed z-50 top-0 left-0 right-0 bottom-0 w-screen h-screen md:py-[10%] bg-black-50'>
      <div className='relative w-screen h-screen md:h-auto md:max-w-3xl mx-auto ring-1 ring-black-5 shadow-md min-h-[400px] bg-white-75 backdrop-blur-30 px-4 md:px-8 md:rounded-xl' ref={modalRef}>
        <div className='absolute left-0 p-4 md:p-8 right-0 bg-white-5 backdrop-blur-30 border-b border-b-black-5 md:rounded-t-xl'>
          <div className='absolute top-4 right-4'>
            <button className='' onClick={() => setOpen(false)}>
              <CgClose className='text-black-50 hover:text-primary-75 text-3xl transition ease-in-out delay-150 duration-300 hover:rotate-90'/>
            </button>
          </div>
          <div className='flex flex-col gap-1 mb-4'>
            <h3 className='text-title4'>{title}</h3>
          </div>
          <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium mx-4 -mb-2 md:-mb-4'>
            <div className=''>{primary}</div>
            <div className='mr-9'>{secondary}</div>
          </div>
        </div>
        <div className='h-full pt-[80px] md:pt-[104px] pb-4 md:pb-[60px] '>
          <div className='overflow-auto h-full md:max-h-[600px]'>
            {children}    
          </div>
        </div>
        <div className='absolute left-0 bottom-0 right-0 p-4 md:px-8 md:py-6 bg-white-5 backdrop-blur-30 border-t border-t-black-5 md:rounded-b-xl'>
          <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote mx-4 uppercase font-medium'>
            <div className=''>{count} {title}</div>
            {
              !!totalSecondary && <div className='mr-9'>Total valor: S/. {totalSecondary}</div>
            }          
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralModal