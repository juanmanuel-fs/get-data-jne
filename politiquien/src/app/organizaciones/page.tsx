import ListOrganization from '@/components/Pages/Organization/ListOrganization'
import RelatedNewsOrganization from '@/components/Pages/Organization/RelatedNewsOrganization'

function page() {
  return (
    <div className='flex flex-col gap-6'>
      <ListOrganization/>
      <div className='grid grid-cols-12'>
        <div className='col-span-8'>
          <RelatedNewsOrganization/>
        </div>
      </div>
    </div>
  )
}

export default page