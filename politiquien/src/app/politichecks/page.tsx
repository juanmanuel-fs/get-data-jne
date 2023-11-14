import FeaturedNews from '@/components/Pages/News/FeaturedNews'
import FrontPageNews from '@/components/Pages/News/FrontPageNews'
import PartnersNews from '@/components/Pages/News/PartnersNews'
import ListPoliticheck from '@/components/Pages/Politicheck/ListPoliticheck'

function page() {
  return (
    <div className='flex flex-col gap-6'>
      <FrontPageNews/>
      <div className='gap-6'>
        <ListPoliticheck/>
      </div>
      <PartnersNews/>
    </div>
  )
}

export default page