import AcademyDataCandidate from '@/components/Pages/Candidate/AcademyDataCandidate'
import ApplicationCandidate from '@/components/Pages/Candidate/ApplicationCandidate'
import DeclarationCandidate from '@/components/Pages/Candidate/DeclarationCandidate'
import ExperienceCandidate from '@/components/Pages/Candidate/ExperienceCandidate'
import FaultsCandidate from '@/components/Pages/Candidate/FaultsCandidate'
import GeneralDataCandidate from '@/components/Pages/Candidate/GeneralDataCandidate'
import LifeLineCandidate from '@/components/Pages/Candidate/LifeLineCandidate'
import RelatedNewsCandidate from '@/components/Pages/Candidate/RelatedNewsCandidate'
import RelatedPolitichecksCandidate from '@/components/Pages/Candidate/RelatedPolitichecksCandidate'
import SentenceCandidate from '@/components/Pages/Candidate/SentenceCandidate'
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 lg:col-span-8'>
        <div className='flex flex-col gap-6'>
          <ApplicationCandidate/>
          <div className='flex flex-col gap-4'>
            <GeneralDataCandidate/>
            <AcademyDataCandidate/>
            <ExperienceCandidate/>
            <DeclarationCandidate/>
            <FaultsCandidate/>
            <SentenceCandidate/>
            <LifeLineCandidate/>
          </div>
        </div>
      </div>
      <div className='col-span-12 md:col-span-8 lg:col-span-4'>
        <div className='flex flex-col gap-6'>
          <RelatedNewsCandidate/>
          <RelatedPolitichecksCandidate/>
        </div>
      </div>
    </div>
  )
}

export default page