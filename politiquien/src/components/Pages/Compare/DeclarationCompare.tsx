import React from 'react'

function DeclarationCompare() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <div className='py-4 sticky top-[220px] md:top-[308px] bg-white-100 border-b border-black-10'>
        <h5 className={`text-title4 font-montserrat mb-1`}>Declaración Jurada</h5>
        <p className='text-subhead text-black-50'>Lorem ipsum dolor sit amet consectetur. Dignissim commodo nunc blandit scelerisque tincidunt rhoncus viverra vitae.</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Ingreso anuales:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-88'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row justify-between'>
                <p>S/. 54 452 543</p>
                <p className='text-footnote font-semibold mt-1'>2017</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row justify-between'>
                <p>S/. 1 234 567</p>
                <p className='text-footnote font-semibold mt-1'>2020</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Bienes inmuebles:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-88'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>CASA DE 2 PISO</p>
                <p className='text-footnote font-semibold md:mt-1'>S/.545 543</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between'>
              <p>TERRENO LA JOYA</p>
                <p className='text-footnote font-semibold md:mt-1'>S/. 54 654</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>CASA DE 2 PISO</p>
                <p className='text-footnote font-semibold md:mt-1'>S/.545 543</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between'>
              <p>TERRENO LA JOYA</p>
                <p className='text-footnote font-semibold md:mt-1'>S/. 54 654</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Bienes muebles</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-88'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>SECCIÓN DE PREVIO RURALES</p>
                <p className='text-footnote font-semibold md:mt-1'>S/. 345 400</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>SECCIÓN DE PREVIO RURALES</p>
                <p className='text-footnote font-semibold md:mt-1'>S/. 34 000</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>SECCIÓN DE PREVIO RURALES</p>
                <p className='text-footnote font-semibold md:mt-1'>S/. 345 400</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>SECCIÓN DE PREVIO RURALES</p>
                <p className='text-footnote font-semibold md:mt-1'>S/. 34 000</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Titularidades:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-88'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>ESCUCLA DE NEGOCIOS SAN FRANCISCO XAVIER S.A.C.</p>
                <p className='text-footnote font-semibold md:mt-1'>ACCIONISTA</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>ESCUCLA DE NEGOCIOS SAN FRANCISCO XAVIER S.A.C.</p>
                <p className='text-footnote font-semibold md:mt-1'>ACCIONISTA</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between'>
                <p>ESCUCLA DE NEGOCIOS SAN FRANCISCO XAVIER S.A.C.</p>
                <p className='text-footnote font-semibold md:mt-1'>PARTICIPANTE</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default DeclarationCompare