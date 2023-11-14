import React from 'react'

function InfoOrganization() {
  return (
    <div className='border border-black-22 rounded-xl p-4 w-full max-w-[320px] md:max-w-[720px] m-auto'>
      <div className='flex flex-col md:flex-row gap-2 sm:gap-2 md:gap-6'>
        <div className='flex-none'>
          <img className='w-64 mx-auto aspect-1 rounded-lg bg-fill-tertiary' src="https://sroppublico.jne.gob.pe/Consulta/Simbolo/GetSimbolo/142" alt="" />
        </div>
        <div className='w-full'>
          <div className='flex flex-col gap-2 md:gap-4 text-center md:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-title3'>PARTIDO POPULAR CRISTIANO</h2>
              <span className='block text-headline text-black-75 font-medium'>Partido Político</span>
            </div>
            <div className='flex flex-col gap-1 md:gap-2'>
              <span className='text-headline text-black-100 font-semibold'>ELECCIONES REGIONALES Y MUNICIPALES 2022</span>
              <span className='text-headline text-black-75 font-medium'>4969 Candidatos</span>
              <hr className='my-2'/>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between gap-4'>
                  <span className='text-subhead text-black-75 font-normal'>Regiones</span>
                  <span className='text-subhead text-black-88 font-medium'>13</span>
                </div>
                <div className='flex flex-row justify-between gap-4'>
                  <span className='text-subhead text-black-75 font-normal'>Provincias</span>
                  <span className='text-subhead text-black-88 font-medium'>134</span>
                </div>
                <div className='flex flex-row justify-between gap-4'>
                  <span className='text-subhead text-black-75 font-normal'>Distritos</span>
                  <span className='text-subhead text-black-88 font-medium'>343</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoOrganization