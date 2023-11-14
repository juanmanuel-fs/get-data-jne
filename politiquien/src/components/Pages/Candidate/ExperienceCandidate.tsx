import React from 'react'
import AccordionCandidate from './components/AccordionCandidate'
import SimpleLabelInfoCandidate from './components/SimpleLabelInfoCandidate'

function ExperienceCandidate() {
  return (
    <AccordionCandidate
      title='EXPERIENCIA LABORAL'
      caption='Muestra los oficios, ocupaciones o profesiones, que ha tenido en el sector público, privado o independiente.'
    >
      <div className='flex flex-col gap-4'>
        <div>
          <h6 className='text-black-75 capitalize font-medium mb-2'>Experiencia 1:</h6>
          <div className='grid grid-cols-2 gap-2'>
            <SimpleLabelInfoCandidate className='rounded-none rounded-ss-xl' label='Ocupación' info='ABOGADO, GERENTE GENERAL'/>
            <SimpleLabelInfoCandidate className='rounded-none rounded-se-xl' label='Lugar de trabajo' info='MUÑIZ, RAMIREZ PEREZ TAIMAN Y LUNA VICTORIA ABOGADOS'/>
            <SimpleLabelInfoCandidate className='rounded-none' label='RUC' info='47644456573'/>
            <SimpleLabelInfoCandidate className='rounded-none' label='Periodo' info='2017 - actual'/>
            <div className='col-span-full'>
              <SimpleLabelInfoCandidate className='rounded-none rounded-b-xl' label='Comentarios' info='Muestra los oficios, ocupaciones o profesiones, que ha tenido en el sector público, privado o independiente.'/>
            </div>
          </div>
        </div>
        <div>
          <h6 className='text-black-75 capitalize font-medium mb-2'>Experiencia 2:</h6>
          <div className='grid grid-cols-2 gap-2'>
            <SimpleLabelInfoCandidate label='Ocupación' info='ABOGADO, GERENTE GENERAL'/>
            <SimpleLabelInfoCandidate label='Lugar de trabajo' info='MUÑIZ, RAMIREZ PEREZ TAIMAN Y LUNA VICTORIA ABOGADOS'/>
            <SimpleLabelInfoCandidate label='RUC' info='47644456573'/>
            <SimpleLabelInfoCandidate label='Periodo' info='2017 - actual'/>
            <div className='col-span-full'>
              <SimpleLabelInfoCandidate label='Comentarios' info='Muestra los oficios, ocupaciones o profesiones, que ha tenido en el sector público, privado o independiente.'/>
            </div>
          </div>
        </div>
      </div>
    </AccordionCandidate>
  )
}

export default ExperienceCandidate