import FeaturedNews from '@/components/Pages/News/FeaturedNews'
import FrontPageNews from '@/components/Pages/News/FrontPageNews'
import ListNews from '@/components/Pages/News/ListNews'
import PartnersNews from '@/components/Pages/News/PartnersNews'

function page() {
  return (
    <div className='flex flex-col gap-6'>
      <FrontPageNews/>
      <div className='flex flex-col md:flex-row gap-6'>
        <ListNews/>
        <FeaturedNews/>
      </div>
      <PartnersNews/>
    </div>
  )
}

export default page