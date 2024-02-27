'use client'

import React, { useState } from 'react'
import DropdownCandidate from './components/DropdownCandidate'
import { SummaryCandidate } from '@/model'

function ApplicationCandidate() {
  const [summaryCandidate, setSummaryCandidate] = useState<SummaryCandidate>({} as SummaryCandidate)

  return (
    <div className='border border-black-22 rounded-xl p-4'>
      <div className='flex flex-row gap-4'>
        <div className='w-full flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left'>
          <div className='sm:flex-none flex justify-center'>
            <div className='relative'>
              <img className='h-80 w-auto rounded-lg bg-fill-tertiary' src="https://votoinformado.jne.gob.pe/voto/images/erm2022/29563543.jpg" alt="" />
              <img className='absolute h-12 w-12 bottom-4 right-4 rounded' src="https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/142" alt="" />
            </div>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <div className='w-full flex flex-row justify-center gap-2 sm:justify-between items-center'>
                <h6 className='text-headline uppercase truncate'>RUBELA JUANA, TREJO MARQUEZ</h6>
                <DropdownCandidate summaryCandidate={summaryCandidate}/>
              </div>
              <div className='sm:hidden'>
                <label htmlFor="" className='px-3 py-1 rounded-md bg-fill-secondary text-orange-500 text-headline font-medium uppercase '>Improcedente</label>
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-1'>
                <span className='text-callout block text-black-50'>Postulación:</span>
                <span className='text-callout block font-semibold text-black-88'>ELECCIONES REGIONALES Y MUNICIPALES 2022</span>
                <span className='text-callout block font-semibold text-primary-88'>GOBERNADOR REGIONAL</span>
                <span className='text-callout block font-medium text-black-75'>PARTIDO POLITICO SOMOS PERÚ</span>
                <span className='text-callout block font-medium text-black-75'>AREQUIPA / AREQUIPA / AREQUIPA</span>
              </div>
              <div className='hidden sm:block mt-2 md:flex'>
                <div className='px-3 py-1 flex rounded-md bg-fill-secondary text-orange-500 text-headline font-medium uppercase '>Improcedente</div>
              </div>
            </div>
            <hr  className="my-2"/>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row justify-between'>
                <span className='block text-subhead text-black-50'>DNI:</span>
                <span className='block text-subhead font-normal text-black-75'>09854234</span>
              </div>
              <div className='flex flex-row justify-between'>
                <span className='block text-subhead text-black-50'>Edad:</span>
                <span className='block text-subhead font-normal text-black-75'>43 Años</span>
              </div>
              <div className='flex flex-row justify-between'>
                <span className='block text-subhead text-black-50'>Legal</span>
                <span className='block text-subhead font-normal text-black-75 text-orange-400'>3 Denuncias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCandidate