'use client'

import { useRouter } from "next/navigation"

function FeaturedNewsCard() {
  const router = useRouter()

  return (
    <div className='flex flex-row gap-2 group cursor-pointer' onClick={() => router.push('/noticias')}>
      <div className='flex-none rounded-xl'>
        <img className="w-[112px] h-[112px] rounded-xl object-cover object-center" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-headline font-semibold capitalize group-hover:text-primary-88 line-clamp-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor ipsum dolor ...
        </h4>
        <span className='block text-callout uppercase font-medium text-primary-88 mt-1'>Arequipa</span>
        <span className='block text-footnote font-normal text-black-50 group-hover:text-black-75 mt-1'>2 de setiembre de 2022</span>
      </div>
    </div>
  )
}

export default FeaturedNewsCard