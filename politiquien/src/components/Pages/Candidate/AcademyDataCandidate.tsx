'use client'
import { useState } from 'react';
import AccordionCandidate from './components/AccordionCandidate'
import ModalButtonCandidate from './components/ModalButtonCandidate'

function AcademyDataCandidate() {
  const [openFiscalModal, setOpenFiscalModal] = useState<boolean>(false)

  return (
    <AccordionCandidate 
      title='FORMACIÓN ACADEMICA'
      caption='Datos de estudios'
    >
      <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <ModalButtonCandidate value='EDUCACIÓN BÁSICA' onCLick={() => {setOpenFiscalModal(true); console.log('saasdasd')}}/>
          <ModalButtonCandidate value='EDUCACIÓN TÉCNICA' onCLick={() => {setOpenFiscalModal(true); console.log('saasdasd')}}/>
          <ModalButtonCandidate value='EDUCACIÓN UNIVERSITARIA' onCLick={() => {setOpenFiscalModal(true); console.log('saasdasd')}}/>
          <ModalButtonCandidate value='EDUCACIÓN POSGRADO' onCLick={() => {setOpenFiscalModal(true); console.log('saasdasd')}}/>
          <ModalButtonCandidate value='EDUCACIÓN DOCTORADO' onCLick={() => {setOpenFiscalModal(true); console.log('saasdasd')}}/>
          <ModalButtonCandidate value='OTRA FORMACIÓN' onCLick={() => {setOpenFiscalModal(true); console.log('saasdasd')}}/>
        </div>
      </>
    </AccordionCandidate>
  )
}

export default AcademyDataCandidate