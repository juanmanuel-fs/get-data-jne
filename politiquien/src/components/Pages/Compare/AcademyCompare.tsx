import React from 'react'

function AcademyCompare() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <div className='py-4 sticky top-[220px] md:top-[308px] bg-white-100 border-b border-black-10'>
        <h5 className={`text-title4 font-montserrat mb-1`}>Formación académica</h5>
        <p className='text-subhead text-black-50'>Lorem ipsum dolor sit amet consectetur. Dignissim commodo nunc blandit scelerisque tincidunt rhoncus viverra vitae.</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Educación básica:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between items-start'>
                <p>EDUCACIÓN PRIMARIA</p>
                <p>SI</p>
              </div>
              <div className='flex flex-row justify-between items-start'>
                <p>EDUCACIÓN SECUNDARIA</p>
                <p>SI</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between items-start'>
                <p>EDUCACIÓN PRIMARIA</p>
                <p>SI</p>
              </div>
              <div className='flex flex-row justify-between items-start'>
                <p>EDUCACIÓN SECUNDARIA</p>
                <p>SI</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Educación Técnica:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL TÉCNICO EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL TÉCNICO</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL TÉCNICO</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL TÉCNICO EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Educación universitaria:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CONCLUIDO</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default AcademyCompare