'use client'

import { ChangeEvent, useEffect, useState } from 'react';

import {SearchNewsModel} from '@/models/SearchNews.model'
import SideRightModal from '@/components/modals/SideRightModal'
import SimpleSelect from '@/components/widget/Form/SimpleSelect'
import InputText from '@/components/widget/Form/InputText'

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { BiSearch } from 'react-icons/bi'
import { IoFilterOutline } from 'react-icons/io5'

import ButtonStyle from '@/assets/styles/Button/Button.module.css'
import IconButtonStyle from '@/assets/styles/Button/Icon.module.css'
import CandidateOrganizationCard from '@/components/Cards/CandidateOrganizationCard';


const data: SearchNewsModel = {
  value: '',
  categories: [],
  state: 0,
  organization: 0
} 

const stateData = [
  {
    id: 12,
    name: 'Arequipa',
  },
  {
    id: 14,
    name: 'Lima',
  },
  {
    id: 3,
    name: 'Ica',
  }
]

const organizationData = [
  {
    id: 12,
    name: 'Peru libre',
  },
  {
    id: 14,
    name: 'Amor por el Perú',
  },
  {
    id: 3,
    name: 'Siempre contigo',
  }
]


function ListCandidateOrganization() {

  const [filterSearchNews, setFilterSearchNews] = useState<SearchNewsModel>(data)
  const [state, setState] = useState<any>(stateData)
  const [organizations, setOrganizations] = useState<any>(organizationData)
  const [openSideRightModal, setOpenSideRightModal] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const temp: any = {...filterSearchNews}
    if(e.target.name == 'value'){
      temp.value = e.target.value
    }
    if (e.target.checked) {
      temp.categories = [...temp.categories!, parseInt(e.target.value)]
    } else {
      temp.categories = temp.categories!.filter((item: any) => item !== parseInt(e.target.value))
    }
    setFilterSearchNews(temp)
  }

  const handleSelect = (id: number, name: string) => {
    const temp: any = {...filterSearchNews}
    temp[name] = id
    setFilterSearchNews({...temp})
  }

  return (
    <>
      <div className=''>
        <div className='flex flex-col mb-6 gap-4'>
          <div className='flex flex-row gap-2 justify-between items-center'>
            <h6 className='text-title4'>LISTA DE CANDIDATOS</h6>
            <div className='flex flex-row gap-2'>
              <button className={IconButtonStyle.ligth} disabled={true}><SlArrowLeft/></button>
              <button className={IconButtonStyle.ligth}><SlArrowRight/></button>
            </div>
          </div>
          <div className='flex flex-row gap-2 w-full md:gap-4 '>
            <div className='w-full'>
              <InputText 
                value={filterSearchNews.value}
                name='value'
                change={(e: ChangeEvent<HTMLInputElement>) => {handleChange(e)}} 
                icon={<BiSearch className='text-black-50'/>} 
                placeholder='Buscar Candidato' 
                type='black'
              />
            </div>
            <div className='flex-none hidden md:block'>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Seleccione un departamento'/>
            </div>
            <div className='flex-none' onClick={() => setOpenSideRightModal(true)}>
              <button className={IconButtonStyle.ligth}><IoFilterOutline/></button>
            </div>
          </div>
        </div>
        <div className='grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6'>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
          <CandidateOrganizationCard/>
        </div>
        <div className='flex flex-row gap-2'>
          <button className={ButtonStyle.black} disabled={true}>ANTERIOR</button>
          <button className={ButtonStyle.black}>SIGUIENTE</button>
          <div className='flex flex-col justify-center'>
            <span className='block text-headline font-semibold'>1 de 12</span>
            <span className='block text-headline font-normal'>142 Noticias</span>
          </div>
        </div>
      </div>

      {
        openSideRightModal && 
        <SideRightModal title='Filtrar Candidatos' open={openSideRightModal} setOpen={setOpenSideRightModal}>
          <div className='flex flex-col gap-4 h-full'>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Buscar candidato</label>
              <InputText type='black' name='value' placeholder='Nombre o DNi' value={filterSearchNews.value} change={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} />
            </div>
            <h6 className='text-title4 text-black-75'>Postulación</h6>
            <div className='flex flex-col gap-2'>
              <label className='text-body text-black-75 block'>Seleccione lugar</label>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Seleccione un departamento'/>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Seleccione un provincia'/>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Seleccione un distrito'/>
            </div>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Organizaciones</label>
              <SimpleSelect name='organization' options={organizations} value={filterSearchNews.organization} change={handleSelect} placeholder='Todas las organizaciones'/>
            </div>
            <h6 className='text-title4 text-black-75'>Hoja de Vida</h6>
            <div className='flex flex-col gap-2'>
              <label className='text-body text-black-75 block'>Seleccione Sexo</label>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Todos los sexo'/>
            </div>
            <div className='flex flex-col gap-2 mb-auto'>
              <label className='text-body text-black-75 block'>Seleccione Formación Académica</label>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Todas formaciones academicas'/>
            </div>
            
            <button className={`${ButtonStyle.black} mt-4`} onClick={() => setOpenSideRightModal(false)}>FILTRAR CANDIDATO</button>
          </div>
        </SideRightModal>
      }
    </>
  )
}

export default ListCandidateOrganization
