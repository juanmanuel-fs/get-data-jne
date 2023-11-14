import CandidateNews from '@/components/Pages/News/CandidateNews'
import ContentNews from '@/components/Pages/News/ContentNews'
import OrganizationNews from '@/components/Pages/News/OrganizationNews'
import RecommendedNews from '@/components/Pages/News/RecommendedNews'
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 lg:col-span-8'>
        <div className='flex flex-col gap-6'>
          <ContentNews/>
          <hr />
          <CandidateNews/>
          <hr />
          <OrganizationNews/>
        </div>
      </div>
      <div className='col-span-12 lg:col-span-4'>
        <div className='flex flex-col gap-4'>
          <RecommendedNews/>
        </div>
      </div>
    </div>
  )
}

export default page