import RecommendedNewsCard from '@/components/Cards/RecommendedNewsCard'

function RelatedNewsOrganization() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='col-span-full'>
        <h2 className='text-title4'>NOTICIAS RELACIONADAS</h2>
      </div>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
      <RecommendedNewsCard/>
    </div>
  )
}

export default RelatedNewsOrganization