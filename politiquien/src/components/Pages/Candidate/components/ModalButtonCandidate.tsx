'use client'
import { GoArrowRight } from "react-icons/go"

interface ModalButtonCandidateProps {
  value: string
  onCLick: Function
}

function ModalButtonCandidate({value, onCLick}:ModalButtonCandidateProps) {
  return (
    <button className='flex flex-row justify-between items-center bg-fill-secondary hover:bg-fill-primary rounded-xl border-black-50 hover:border-black-100 py-3 px-6' onClick={() => onCLick()}>
      <h6 className="text-headline text-black-75 select-none font-semibold">{value}</h6>
      <GoArrowRight className='text-black-100 text-2xl'/>
    </button>
  )
}

export default ModalButtonCandidate