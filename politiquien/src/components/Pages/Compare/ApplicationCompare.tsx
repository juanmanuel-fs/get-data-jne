import React from 'react'

function ApplicationCompare() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <div className='py-4 sticky top-[220px] md:top-[308px] bg-white-100 border-b border-black-10'>
        <h5 className={`text-title4 font-montserrat block mb-1`}>Postulación</h5>
        <p className='text-subhead text-black-50'>Lorem ipsum dolor sit amet consectetur. Dignissim commodo nunc blandit scelerisque tincidunt rhoncus viverra vitae.</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Proceso electoral:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <p>Elecciones municipales y regionales  </p>
            <p>Elecciones municipales y regionales  </p>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Año:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <p>2023</p>
            <p>2019</p>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Cargo:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <p>GOBERBADOR REGIONAL</p>
            <p>ALCALDE PROVINCIAL</p>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Organización política:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100 mt-2'>
            <div className='flex flex-col gap-1'>
              <img className='h-8 w-8 md:h-12 md:w-12 bg-fill-tertiary' src='' />
              <p>PARTIDO POLITICO SOMOS PERÚ</p>
            </div>
            <div className='flex flex-col gap-1'>
              <img className='h-8 w-8 md:h-12 md:w-12 bg-fill-tertiary' src='' />
              <p>AREQUIPA TRADICIÓN Y FUTURO99</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Lugar:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <p>AREQUIPA / AREQUIPA / AREQUIPA</p>
            <p>LIMA / LIMA</p>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default ApplicationCompare