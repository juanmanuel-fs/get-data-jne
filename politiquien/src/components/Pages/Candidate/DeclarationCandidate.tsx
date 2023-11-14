import React from 'react'
import AccordionCandidate from './components/AccordionCandidate'
import SimpleLabelInfoCandidate from './components/SimpleLabelInfoCandidate'

function DeclarationCandidate() {
  return (
    <AccordionCandidate
      title='Declaración Jurada'
      caption='Datos financieros y posiciones de  bienes.'
    >
      <div>
        <h6 className='text-black-75 capitalize font-medium mb-2'>Ingresos:</h6>
        <div className='grid grid-cols-3 gap-2'>
          <SimpleLabelInfoCandidate label='REMUNERACIÓN BRUTA ANUAL' info='S/ 244,364.30'></SimpleLabelInfoCandidate>
          <SimpleLabelInfoCandidate label='RENTA BRUTA ANUAL POR EJERCICIO INDIVIDUAL' info='S/ 17,522.31'></SimpleLabelInfoCandidate>
          <SimpleLabelInfoCandidate label='OTROS INGRESOS ANUALES	' info='S/ 44,874.00'></SimpleLabelInfoCandidate>
          <SimpleLabelInfoCandidate className='col-span-full' label='TOTAL' info='S/ 306,760.61'></SimpleLabelInfoCandidate>
        </div>
      </div>
    </AccordionCandidate>
  )
}

export default DeclarationCandidate