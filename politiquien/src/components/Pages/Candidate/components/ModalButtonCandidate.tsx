'use client'
import { BsWindowStack } from "react-icons/bs";

interface ModalButtonCandidateProps {
  title: string
  count?: number
  countColor?: string
  onCLick: Function
  disabled?: boolean
}

function ModalButtonCandidate({title, onCLick, count = 0, countColor = 'bg-black-100', disabled= false}:ModalButtonCandidateProps) {
  return (
    <button className={`flex flex-row gap-6 items-center bg-fill-tertiary hover:bg-fill-primary rounded-xl border-black-50 disabled:bg-fill-quaternary hover:border-black-100 py-4 px-6`} onClick={() => onCLick()} disabled={disabled || !!!count}>
      <BsWindowStack className={`flex-none ${disabled || !!!count ? 'text-black-50' : 'text-black-75'} text-xl`}/>
      <h6 className={`text-headline ${disabled || !!!count ? 'text-black-50' : 'text-black-75'} select-none font-semibold line-clamp-1`}>{title} </h6>
      <small className={`ml-auto rounded-full ${ disabled || !!!count ? 'bg-black-10' : countColor} text-white-100 py-0 px-2`}>{ count }</small>
    </button>
  )
}

export default ModalButtonCandidate