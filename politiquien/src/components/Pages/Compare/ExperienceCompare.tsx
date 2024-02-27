import React from 'react'

function ExperienceCompare() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <div className='py-4 sticky top-[220px] md:top-[308px] bg-white-100 border-b border-black-10'>
        <h5 className={`text-title4 font-montserrat mb-1`}>Experiencia laboral</h5>
        <p className='text-subhead text-black-50'>Lorem ipsum dolor sit amet consectetur. Dignissim commodo nunc blandit scelerisque tincidunt rhoncus viverra vitae.</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-col gap-1'>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-88'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>ABOGADO, GERENTE GENERAL</p>
                <p className='text-footnote font-semibold md:mt-1'>2017 - actual</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>ABOGADO, GERENTE GENERAL</p>
                <p className='text-footnote font-semibold md:mt-1'>2017 - actual</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>ABOGADO, GERENTE GENERAL</p>
                <p className='text-footnote font-semibold md:mt-1'>2017 - actual</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default ExperienceCompare