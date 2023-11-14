import React from 'react'

function CardPartner() {
  return (
    <div className='group border rounded-xl border-black-5 p-4 hover:bg-fill-quaternary cursor-pointer'>
      <div className='flex flex-row gap-4 justify-between items-center select-none'>
        <img className='flex-none h-6' src="examples/logo_newspaper.jpg" alt="" />
        <div className='truncate'>
          <h6 className='text-headline font-semibold text-black-75 group-hover:text-black-100 text-end truncate'>El búho</h6>
          <h6 className='text-headline font-semibold text-primary-75 group-hover:text-primary-88 text-end truncate'>Arequipa</h6>
        </div>
      </div>
    </div>
  )
}

export default CardPartner