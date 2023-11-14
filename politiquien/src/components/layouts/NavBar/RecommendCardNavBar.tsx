import Image from 'next/image'
import React from 'react'

function RecommendCardNavBar() {
  return (
    <div className='bg-black-10 p-2 flex flex-row gap-3 rounded-xl'>
      <div className='flex-none'>
        <Image className='h-20 w-20 bg-black-22 border-none rounded-lg' src="" alt="" />
      </div>
      <div className='flex-auto'>
        <h6 className='text-headline text-white-100 font-semibold line-clamp-3 capitalize'> Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor ipsum dolor dsfg gdetgg fdsg4g dfgfwef</h6>
        <small className='text-footnote text-white-75 block mt-1'>36 de marzo 2022</small>
      </div>
    </div>
  )
}

export default RecommendCardNavBar