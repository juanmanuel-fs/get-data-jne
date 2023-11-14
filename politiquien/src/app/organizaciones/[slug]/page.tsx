import InfoOrganization from '@/components/Pages/Organization/InfoOrganization'
import ListCandidateOrganization from '@/components/Pages/Organization/ListCandidateOrganization'

function page() {
  return (
    <div className='flex flex-col gap-4'>
      <InfoOrganization/>
      <ListCandidateOrganization/>
    </div>
  )
}

export default page