import React from 'react'
import AccordionCandidate from './components/AccordionCandidate'
import SimpleLabelInfoCandidate from './components/SimpleLabelInfoCandidate'
import GeneralModal from '@/components/modals/CandidateModal'
import AccordionDeclarationCandidate from './components/AccordionDeclarationCandidate'

function ExperienceCandidate() {
  return (
    <AccordionCandidate
      title='EXPERIENCIA LABORAL'
      caption='Muestra los oficios, ocupaciones o profesiones, que ha tenido en el sector público, privado o independiente.'
    >
      <div className='flex flex-col'>
        <div className='flex justify-between text-black-50 flex-row gap-2 text-footnote uppercase font-medium px-4 md:pb-4 border-b border-b-black-10'>
          <div className=''>Ocupación</div>
          <div className='mr-9'>Fecha</div>
        </div>
        <AccordionDeclarationCandidate description='ABOGADO, GERENTE GENERAL' value='2017 - Actual'>
          <div className='grid grid-cols-12 gap-2'>
            <SimpleLabelInfoCandidate className='col-span-8' label='Lugar de trabajo' info='UNIVERSIDAD NACIONAL DE TRUJILLO'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Ruc' info='7654646347'/>
            <SimpleLabelInfoCandidate className='col-span-8' label='Dirección' info='calle siempre viva'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='País' info='Perú'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Departamento' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Provincia' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Distrito' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
          </div>
        </AccordionDeclarationCandidate>
        <AccordionDeclarationCandidate description='ABOGADO, GERENTE GENERAL' value='2017 - Actual'>
          <div className='grid grid-cols-12 gap-2'>
            <SimpleLabelInfoCandidate className='col-span-8' label='Lugar de trabajo' info='UNIVERSIDAD NACIONAL DE TRUJILLO'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Ruc' info='7654646347'/>
            <SimpleLabelInfoCandidate className='col-span-8' label='Dirección' info='calle siempre viva'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='País' info='Perú'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Departamento' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Provincia' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Distrito' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
          </div>
        </AccordionDeclarationCandidate>
        <AccordionDeclarationCandidate description='ABOGADO, GERENTE GENERAL' value='2017 - Actual'>
          <div className='grid grid-cols-12 gap-2'>
            <SimpleLabelInfoCandidate className='col-span-8' label='Lugar de trabajo' info='UNIVERSIDAD NACIONAL DE TRUJILLO'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Ruc' info='7654646347'/>
            <SimpleLabelInfoCandidate className='col-span-8' label='Dirección' info='calle siempre viva'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='País' info='Perú'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Departamento' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Provincia' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-4' label='Distrito' info='Lima'/>
            <SimpleLabelInfoCandidate className='col-span-full' label='Comentario' info='ESTUDIE LA CARRERA DE DESARROLLO AMBIENTAL'/>
          </div>
        </AccordionDeclarationCandidate>
      </div>
    </AccordionCandidate>
  )
}

export default ExperienceCandidate