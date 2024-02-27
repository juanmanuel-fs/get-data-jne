'use client'
import { useEffect, useState } from 'react'
import AccordionCandidate from './components/AccordionCandidate'
import ModalButtonCandidate from './components/ModalButtonCandidate'
import GeneralModal from '@/components/modals/CandidateModal'
import AccordionDeclarationCandidate from './components/AccordionDeclarationCandidate'
import SimpleLabelInfoCandidate from './components/SimpleLabelInfoCandidate'

function SentenceCandidate() {
  const [faultsModal, setFaultsModal] = useState<string>('')
  const [openFaultModal, setOpenFaultModal] = useState<boolean>(false)

  useEffect(() => { if(openFaultModal == false) setFaultsModal('')},[openFaultModal])

  return (
    <>
      <AccordionCandidate
        title='Sentencias'
        caption='faltas judicilaes, penales, administrativas, etc.'
      > 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <ModalButtonCandidate title='PENAL' count={20} countColor='bg-orange-500' onCLick={() => {setFaultsModal('criminal'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate title='OBLIGATORIA' count={3} onCLick={() => {setFaultsModal('obligatory'); setOpenFaultModal(true)}}/>
        </div>

      </AccordionCandidate>
      {
        faultsModal === 'criminal' &&
        <GeneralModal setOpen={setOpenFaultModal} title='SENTENCIA PENAL' open={openFaultModal} primary='Crimen' secondary='Estado'>
          <div className='flex flex-col'>
            <AccordionDeclarationCandidate description='CONDUCCION VEHICULO EBRIO ART. 247' value='PENA CUMPLIDA'>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-full' label='Organo Judicial' info='JUZGADO PENAL DE RIOJA' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Expediente' info='00136-2011-0-0207-JM-PE-01' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Fecha' info='2013-06-20' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Fallo' info='RESERVA EL FALLO CONDENATORIO' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Moralidad' info='RESERVA DE FALLO' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTA PENA  ESTA CUMPLIDA Y  ARCHIVADA' bg={true}/>
              </div>
            </AccordionDeclarationCandidate>
          </div>
        </GeneralModal>      
      }
      {
        faultsModal === 'obligatory' &&
        <GeneralModal setOpen={setOpenFaultModal} title='SENTENCIA OBLIGATORIA' primary='Materia' secondary='' open={openFaultModal}>
          <div className='flex flex-col'>
            <AccordionDeclarationCandidate description='FAMILIA / ALIMENTARIA' value=''>
              <div className='grid grid-cols-12 gap-2'>
                <SimpleLabelInfoCandidate className='col-span-full' label='Organo Judicial' info='JUZGADO PENAL DE RIOJA' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Expediente' info='00136-2011-0-0207-JM-PE-01' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-6' label='Fallo' info='RESERVA EL FALLO CONDENATORIO' bg={true}/>
                <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTA PENA  ESTA CUMPLIDA Y  ARCHIVADA' bg={true}/>
              </div>
            </AccordionDeclarationCandidate>
          </div>
        </GeneralModal>      
      }
    </>
  )
}

export default SentenceCandidate