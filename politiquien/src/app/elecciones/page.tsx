import FrontPageHomeProcess from '@/components/Pages/Process/FrontPageProcess'
import ListProcess from '@/components/Pages/Process/ListProcess'

function page() {
  return (
    <div className='flex flex-col gap-6'>
      <FrontPageHomeProcess/>
      <ListProcess/>
    </div>
  )
}

export default page