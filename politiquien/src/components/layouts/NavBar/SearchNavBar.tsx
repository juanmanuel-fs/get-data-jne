'use client'
import SearchModal from "../../modals/SearchModal"

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"

import InputText from "@/components/widget/Form/InputText"

interface SearchNavBarProps {
  valueSearchNavBar: string
  setValueSearchNavBar: Dispatch<SetStateAction<string>>
}

function SearchNavBar({valueSearchNavBar, setValueSearchNavBar}: SearchNavBarProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false)

  useEffect(() => {
    if(isFocus) {
      setOpenSearchModal(true)
    }
    else {
      setOpenSearchModal(false)
      setValueSearchNavBar('')
    }
  },[isFocus])

  useEffect(() => {
    if(!!!valueSearchNavBar ) setOpenSearchModal(false)
  },[valueSearchNavBar])

  useEffect(() => {
    if(openSearchModal == false) setValueSearchNavBar('')
  },[openSearchModal])

  return (
    <>
      <InputText 
        value={valueSearchNavBar} 
        change={(e:ChangeEvent<HTMLInputElement>) => setValueSearchNavBar(e.target.value)} 
        icon={<BiSearch className='text-white-50'/>} 
        placeholder='Buscar por nombre o DNI' 
        type='white'
        setIsFocus={setIsFocus}
      />
      { openSearchModal && <SearchModal valueSearch={valueSearchNavBar} setOpenSearchModal={setOpenSearchModal}/> }
    </>
  )
}

export default SearchNavBar