'use client'

import { ChangeEvent, useEffect, useState } from 'react';

import {CategoryModel, SearchNewsModel} from '@/models/SearchNews.model'

import CategoryCheckbox from '@/components/widget/Form/CategoryCheckbox'
import InputText from '@/components/widget/Form/InputText'

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { BiSearch } from 'react-icons/bi'
import { IoFilterOutline } from 'react-icons/io5'

import ButtonStyle from '@/assets/styles/Button/Button.module.css'
import IconButtonStyle from '@/assets/styles/Button/Icon.module.css'
import SideRightModal from '@/components/modals/SideRightModal'
import SimpleSelect from '@/components/widget/Form/SimpleSelect'
import PoliticheckCard from '@/components/Cards/PoliticheckCard';

const data: SearchNewsModel = {
  value: '',
  categories: [],
  state: 0,
  organization: 0
} 

const categoryData: CategoryModel [] = [
  {
    id: 12,
    name: 'category 1',
  },
  {
    id: 14,
    name: 'category 2',
  },
  {
    id: 3,
    name: 'category 3',
  },
  {
    id: 17,
    name: 'category 2',
  },
  {
    id: 34,
    name: 'category 3',
  },
  {
    id: 146,
    name: 'category 2',
  },
  {
    id: 33,
    name: 'category 3',
  }
]

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

function ListPoliticheck() {
  const [filterSearchNews, setFilterSearchNews] = useState<SearchNewsModel>(data)
  const [state, setState] = useState<any>(stateData)
  const [organizations, setOrganizations] = useState<any>(organizationData)
  const [category, setCategory] = useState<CategoryModel[]>(categoryData)
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
      <div className='basis-8/12 overflow-auto'>
        <div className='flex flex-row gap-4 justify-between mb-2 items-center'>
          <h2 className='text-title3 '>ÚLTIMAS POLITICHECKS</h2>
          <div className='flex flex-row gap-2 md:gap-4'>
            <button className={IconButtonStyle.ligth} disabled={true}><SlArrowLeft/></button>
            <button className={IconButtonStyle.ligth}><SlArrowRight/></button>
          </div>
        </div>
        <div className='flex flex-col mb-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2 md:gap-4 '>
              <div className='w-full'>
                <InputText 
                  value={filterSearchNews.value}
                  name='value'
                  change={(e: ChangeEvent<HTMLInputElement>) => {handleChange(e)}} 
                  icon={<BiSearch className='text-black-50'/>} 
                  placeholder='Buscar politichecks' 
                  type='black'
                />
              </div>
              <div className='flex-none' onClick={() => setOpenSideRightModal(true)}>
                <button className={IconButtonStyle.ligth}><IoFilterOutline/></button>
              </div>
            </div>
            <div className='flex gap-2 overflow-x-scroll pb-4'>
              {
                category.map((category, index) => 
                  <CategoryCheckbox index={index} label={category.name} change={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)} value={category.id} key={index}/>
                )
              }
            </div>
          </div>
          <div className='rounded-xl bg-fill-quaternary p-4 mt-4 hidden'>
            <h6 className='text-headline text-black-75 mb-4'>Resultado de la búsqueda</h6>
            <div className='grid grid-cols-2 gap-2'>
            </div>
          </div>
        </div>
        <div className='grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 mb-6'>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
          <PoliticheckCard/>
        </div>
        <div className='flex flex-row gap-2'>
          <button className={ButtonStyle.black} disabled={true}>ANTERIOR</button>
          <button className={ButtonStyle.black}>SIGUIENTE</button>
          <div className='flex flex-col'>
            <span className='block text-headline font-semibold'>1 de 12</span>
            <span className='block text-headline font-normal'>142 Noticias</span>
          </div>
        </div>
      </div>

      {
        openSideRightModal && 
        <SideRightModal title='filtrar noticias' open={openSideRightModal} setOpen={setOpenSideRightModal}>
          <div className='flex flex-col gap-4 h-full'>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Noticia</label>
              <InputText type='black' name='value' placeholder='Nombre de la noticia' value={filterSearchNews.value} change={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} />
            </div>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Departamnetos</label>
              <SimpleSelect name='state' options={state} value={filterSearchNews.state} change={handleSelect} placeholder='Seleccione un departamento'/>
            </div>
            <div className=''>
              <label className='text-body text-black-75 block mb-2'>Organizaciones</label>
              <SimpleSelect name='organization' options={organizations} value={filterSearchNews.organization} change={handleSelect} placeholder='Seleccione un departamento'/>
            </div>
            <div className='mb-auto'>
              <label className='text-body text-black-75 block mb-2'>Categorias</label>
              <div className='flex flex-wrap gap-2 pb-4'>
                {
                  categoryData.map((category, index) => 
                    <CategoryCheckbox index={index} checked={filterSearchNews.categories?.some(dat => dat ==category.id)} label={category.name} change={(e:ChangeEvent<HTMLInputElement>) => handleChange(e)} value={category.id} key={index}/>)
                }
              </div>
            </div>
            <button className={ButtonStyle.black} onClick={() => setOpenSideRightModal(false)}>FILTRAR NOTICIAS</button>
          </div>
        </SideRightModal>
      }
    </>
  )
}

export default ListPoliticheck