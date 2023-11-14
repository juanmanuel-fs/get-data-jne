'use client'
import { useEffect, useState } from 'react'
import AccordionCandidate from './components/AccordionCandidate'
import ModalButtonCandidate from './components/ModalButtonCandidate'
import GeneralModal from '@/components/modals/GeneralModal'

function FaultsCandidates() {
  const [faultsModal, setFaultsModal] = useState<string>('')
  const [openFaultModal, setOpenFaultModal] = useState<boolean>(false)

  useEffect(() => { if(openFaultModal == false) setFaultsModal('')},[openFaultModal])

  return (
    <>
      <AccordionCandidate
        title='Faltas'
        caption='faltas judicilaes, penales, administrativas, etc.'
      > 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <ModalButtonCandidate value='FALTAS FISCALES' onCLick={() => {setFaultsModal('fiscals'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate value='FALTAS JUDICIALES' onCLick={() => {setFaultsModal('judicials'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate value='FALTAS DE TRANSITOS' onCLick={() => {setFaultsModal('transitions'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate value='FALTAS ADMINISTRATIVAS' onCLick={() => {setFaultsModal('administratives'); setOpenFaultModal(true)}}/>
          <ModalButtonCandidate value='OTRA FALTAS' onCLick={() => {setFaultsModal('other'); setOpenFaultModal(true)}}/>
        </div>

      </AccordionCandidate>
      {
        faultsModal === 'fiscals' &&
        <GeneralModal setOpen={setOpenFaultModal} title='FALTAS FISCALES' open={openFaultModal}>
          <div className='flex flex-col gap-1 w-full'>
            <div className='hidden md:flex flex-row gap-2 text-footnote uppercase font-medium mb-1 px-3 text-black-50'>
              <div className='basis-1/3 '>Falta</div>
              <div className='basis-1/6'>Estado</div>
              <div className='basis-2/3'>Comentario</div>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='md:px-3 md:py-2 md:border border-black-22 rounded-lg'>
                <div className='md:hidden flex flex-row justify-between items-center mb-1'>
                  <h6 className='text-headline text-black-88'>FALTA #1</h6>
                  <div className='bg-fill-tertiary rounded-md py-1 px-2 md:p-0 text-callout font-medium text-black-75'>ARCHIVADO</div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center gap-2 text-subhead font-medium text-black-88'>
                  <div className='md:basis-1/3 before:block before:text-black-50 before:text-footnote before:mb-1 md:before:mb-0 before:content-["Falta:"] md:before:content-[""] border md:border-none border-black-22 rounded-xl py-3 px-4 md:p-0'>DENUNCIAS DE ALIMENTOS</div>
                  <div className='hidden md:block md:basis-1/6 '>ARCHIVADO</div>
                  <div className='md:basis-2/3 before:block before:text-black-50 before:text-footnote before:mb-1 md:before:mb-0 before:content-["Comentario:"] md:before:content-[""] border md:border-none border-black-22 rounded-xl py-3 px-4 md:p-0'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
                </div>
              </div>
            </div>
          </div>
        </GeneralModal>      
      }
      {
        faultsModal === 'judicials' &&
        <GeneralModal setOpen={setOpenFaultModal} title='FALTAS JUDICIALES' open={openFaultModal}>
          <div className='flex flex-col gap-1 w-full'>
            <div className='px-3'>
              <div className='flex text-black-50 flex-row gap-2 text-footnote uppercase font-medium'>
                <div className='basis-1/3'>Falta</div>
                <div className='basis-1/6'>Estado</div>
                <div className='basis-2/3'>Comentario</div>
              </div>
            </div>
            <div className='px-3 py-2 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
            <div className='px-3 py-2 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
            <div className='px-3 py-2 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
            <div className='px-3 py-2 border border-black-22 rounded-lg'>
              <div className='flex flex-row items-center gap-2 text-subhead uppercase font-normal'>
                <div className='basis-1/3'>Denuncia de alimentos</div>
                <div className='basis-1/6'>ARCHIVADO</div>
                <div className='basis-2/3'>NO SE COMPROBÓ CULPABILIDAD O DELITO INTENCIONAL</div>
              </div>
            </div>
          </div>
        </GeneralModal>      
      }
    </>
  )
}

export default FaultsCandidates