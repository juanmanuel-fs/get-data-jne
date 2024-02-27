import ListCandidate from '@/components/Pages/Candidate/ListCandidate'
import SaveCandidate from '@/components/Pages/Candidate/SaveCandidate'
import FeaturedNews from '@/components/Pages/News/FeaturedNews'
import ListNews from '@/components/Pages/News/ListNews'
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <ListCandidate/>
      <div className='col-span-12 lg:col-span-4 flex flex-col gap-6'>
        <SaveCandidate/>
        <FeaturedNews/>
      </div>
    </div>
  )
}

export default page