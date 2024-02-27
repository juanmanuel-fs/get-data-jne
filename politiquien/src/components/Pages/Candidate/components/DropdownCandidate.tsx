import React, { useState } from 'react'

import { SummaryCandidate } from '@/model'

import Dropdown from '@/components/widget/Menu/Dropdown'
import OptionDropdown from '@/components/widget/Menu/OptionDropdown'

import { AiOutlineSave } from 'react-icons/ai'
import { TiEqualsOutline } from 'react-icons/ti'
import { LiaShareSquareSolid } from 'react-icons/lia'
import { PiDotsThreeBold } from 'react-icons/pi'
import ShareCandidate from './ShareCandidate'

interface DropdownCandidateInterface {
  summaryCandidate: SummaryCandidate
}

function DropdownCandidate({summaryCandidate}: DropdownCandidateInterface) {

  const [isShareOpen, setIsShareOpen] = useState<boolean>(false)

  const save = () => {
    console.log('save')
  }

  const compare = () => {
    console.log('compare')
  }

  const share = () => {
    setIsShareOpen(true)
  }

  return (
    <>
      <Dropdown icon={<PiDotsThreeBold className='text-2xl cursor-pointer text-black-50 hover:text-black-100'/>}>
        <OptionDropdown title='Guardar' icon={<AiOutlineSave/>} click={save}/>
        <OptionDropdown title='Comparar' icon={<TiEqualsOutline className='rotate-90'/>} click={compare}/>
        <OptionDropdown title='Compartir' icon={<LiaShareSquareSolid/>} click={share}/>
      </Dropdown>
      {
        isShareOpen &&
          <ShareCandidate  summary={summaryCandidate} open={isShareOpen} setOpen={setIsShareOpen}/>
      }
    </>
  )
}

export default DropdownCandidate