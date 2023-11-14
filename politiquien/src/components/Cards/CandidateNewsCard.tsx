import Image from 'next/image'

function CandidateNewsCard() {
  return (
    <div className='flex gap-x-2 items-center rounded-lg bg-fill-quaternary border border-fill-tertiary hover:bg-fill-tertiary p-2 cursor-pointer '>
      <div className='flex-none'>
        <Image className='bg-black-5 border-none h-16 w-12 rounded-lg' src="" alt="" />
      </div>
      <div className='flex-auto truncate'>
        <h5 className='text-headline font-semibold text-black-75 truncate'>RUBELA JUANA, TREJO MARQUEZ fsaf</h5>
        <span className='text-callout text-primary-88 block truncate'>GOBERNADOR REGIONAL</span>
        <span className='text-callout text-black-75 block uppercase truncate'> Partido popular cristiano</span>
      </div>
    </div>
  )
}

export default CandidateNewsCard