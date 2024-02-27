import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import CandidateMainCard from "@/components/Cards/CandidateMainCard";
import InputText from "@/components/widget/Form/InputText";
import SimpleSelect from "@/components/widget/Form/SimpleSelect";

import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { SelectModel } from "@/model";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import IconButtonStyle from '@/assets/styles/Button/Icon.module.css'

const initialData: SelectModel = {
  id: 0,
  name: '',
  img: ''
}

const processData: SelectModel [] = [
  {
    id: 12,
    name: 'REGIONALES Y MUNICIPALES 2022',
  },
  {
    id: 14,
    name: 'GENERALES 2021',
  },
  {
    id: 13,
    name: 'PARLAMENTALES 2020',
  },
  {
    id: 16,
    name: 'REGIONALES Y MUNICIPALES 2022',
  },
  {
    id: 15,
    name: 'GENERALES 2021',
  },
  {
    id: 18,
    name: 'PARLAMENTALES 2020',
  },
  
]

interface SearchInterface {
  value: string
  organization: number | string
  process: number | string
}

const initSearchCompare: SearchInterface = {
  value: '',
  organization: 0,
  process: 0
}

interface searchCompareProps {
  setIsOpenSearchCompare: Dispatch<SetStateAction<boolean>>
}

function SearchCompare({setIsOpenSearchCompare}: searchCompareProps) {
  const [searchCompare, setSearchCompare] = useState<SearchInterface>(initSearchCompare)
  const [processes, setProcesses] = useState<SelectModel []>(processData)

  const sectionRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | string | number, name='') => {
    const tempSearch: any = {...searchCompare}

    if(typeof e === 'object') {
      e.target.name == 'value' && (tempSearch.value = e.target.value)
    }
    if(!!name) tempSearch[name] = e 

    setSearchCompare(tempSearch)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setIsOpenSearchCompare(false)
      }
    }
    document.addEventListener("click", checkIfClickedOutside, true)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true)
    }
  },[])

  return (
    <div className='fixed z-50 top-0 left-0 right-0 bottom-0 bg-black-22 flex justify-center items-center'>
      <div className='relative w-screen h-full md:min-h-[480px] md:max-h-[720px] md:max-w-2xl mx-auto ring-1 ring-black-5 shadow-2xl bg-white-100 backdrop-blur-30 px-4 md:px-8 md:rounded-xl' ref={sectionRef}>
        <div className="absolute left-0 p-4 pb-2 md:p-8 md:pt-6 md:pb-2 right-0 bg-white-10 backdrop-blur-30 border-b border-b-black-5 md:rounded-t-xl ">
          <div className='flex flex-col gap-2'>
            <div className="flex flex-row justify-between items-center mb-2">
              <h3 className='text-title4'>Buscar Candidato</h3>
              <button className='' onClick={() => setIsOpenSearchCompare(false)}>
                <CgClose className='text-black-50 hover:text-primary-75 text-2xl'/>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="col-span-full">
                <InputText 
                  value={searchCompare.value} 
                  name="value"
                  change={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)} 
                  icon={<BiSearch className='text-black-50'/>} 
                  placeholder='Buscar por nombre o DNI' 
                  type='black'
                />
              </div>
              <SimpleSelect name='organization' options={processes} value={searchCompare.organization} change={handleChange} placeholder='Organización política'/>
              <SimpleSelect name='process' options={processes} value={searchCompare.process} change={handleChange} placeholder='Proceso Electoral'/>
            </div>
            <div className="flex flex-row gap-2 items-center mt-2">
              <p className="text-subhead font-medium text-black-50">34 RESULTADO(S)</p>
              <p className="text-subhead font-medium text-black-50 ml-auto">1-12</p>
              <div className="text-subhead text-black-50">
                <div className='flex flex-row gap-2'>
                  <button className={IconButtonStyle.ligth} disabled={true}><SlArrowLeft/></button>
                  <button className={IconButtonStyle.ligth}><SlArrowRight/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full pt-[268px] md:pt-[248px] overflow-y-scroll no-scrollbar pb-4 -mx-2 md:pb-4">
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
          <CandidateMainCard/>
    
        </div>
      </div>
    </div>
  )
}

export default SearchCompare