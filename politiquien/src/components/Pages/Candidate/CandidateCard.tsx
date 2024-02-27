import { useState } from "react";
import Link from "next/link";

import { SummaryCandidate } from "@/model";

import DropdownCandidate from "./components/DropdownCandidate";

import ButtonStyle from '@/assets/styles/Button/Button.module.css'


function CandidateCard() {
  const [summaryCandidate, setSummaryCandidate] = useState<SummaryCandidate>({} as SummaryCandidate)
  
  return (
    <div className='border border-black-22 rounded-xl'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row justify-between items-center p-2'>
          <label htmlFor="" className='px-3 py-1 rounded-md bg-fill-secondary text-orange-500 text-headline font-medium uppercase '>Improcedente</label>
          <DropdownCandidate summaryCandidate={summaryCandidate}/>
        </div>
        <div className='flex-none flex justify-center px-4 rounded-l-xl'>
          <div className='relative'>
            <img className='h-48 w-auto rounded-lg bg-fill-tertiary' src="https://votoinformado.jne.gob.pe/voto/images/erm2022/29563543.jpg" alt="" />
            <img className='absolute h-8 w-8 bottom-1 right-1 rounded' src="https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/142" alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 text-center '>
          <div className='flex flex-col w-[80%]'>
            <h6 className='text-headline uppercase'>RUBELA JUANA, TREJO MARQUEZ</h6>
          </div>
          <div className='flex flex-col gap-1 px-4'>
            <span className='text-subhead block text-black-50'>Postulación:</span>
            <span className='text-callout block font-semibold text-black-100'>GOBERNADOR REGIONAL</span>
            <span className='text-subhead block font-medium text-black-75'>PARTIDO POLITICO SOMOS PERÚ</span>
            <span className='text-subhead block font-medium text-black-75'>AREQUIPA / AREQUIPA / AREQUIPA</span>
          </div>
        </div>
        <hr  className="mx-4"/>
        <div className='flex flex-col gap-2 mx-4'>
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
        <div className=" p-4">
          <Link href='/candidatos/dghgf' className={`${ButtonStyle.black} ${ButtonStyle.small} `} >Hoja de Vida</Link>
        </div>
      </div>
    </div>
  )
}

export default CandidateCard