import React from 'react'

function LifeLineCompare() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <div className='py-4 sticky top-[220px] md:top-[308px] bg-white-100 border-b border-black-10'>
        <h5 className={`text-title4 font-montserrat mb-1`}>Historial político</h5>
        <p className='text-subhead text-black-50'>Lorem ipsum dolor sit amet consectetur. Dignissim commodo nunc blandit scelerisque tincidunt rhoncus viverra vitae.</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Año 2017</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>CANDIDATO REGIDOR</p>
                <p className='text-footnote font-semibold md:mt-1'>2017</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>RENUNCIA DE ORGANIZACIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>2011-2017</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>RENUNCIA DE ORGANIZACIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>2011-2017</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Año 2014</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>CANDIDATO REGIDOR</p>
                <p className='text-footnote font-semibold md:mt-1'>2014</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>RENUNCIA DE ORGANIZACIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>2011-2014</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>RENUNCIA DE ORGANIZACIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>2011-2014</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Año 2011</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>RENUNCIA DE ORGANIZACIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>2011</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default LifeLineCompare