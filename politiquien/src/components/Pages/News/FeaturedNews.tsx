import FeaturedNewsCard from '@/components/Cards/FeaturedNewsCard'
import React from 'react'

function FeaturedNews() {
  return (
    <div className='basis-4/12'>
      <h2 className='text-title3 mb-4'>NOTICIAS DESTACADAS</h2>
      <div className='flex flex-col gap-4'>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
        <FeaturedNewsCard/>
      </div>
    </div>
  )
}

export default FeaturedNews