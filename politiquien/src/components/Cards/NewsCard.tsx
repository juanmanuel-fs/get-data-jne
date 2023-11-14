'use client'

import { useRouter } from 'next/navigation'

import CategoryBadge from '@/assets/styles/Badge/CategoryBadge.module.css'

function NewsCard() {
  const router = useRouter()

  return (
    <div className='flex flex-col gap-2 group cursor-pointer' onClick={() => router.push('/noticias/gdf')}>
      <div className='flex flex-row gap-2 items-center w-full'>
        <img className='h-6 w-auto' src="examples/logo_newspaper.jpg" alt="" />
        <div className='flex flex-col truncate'>
          <h6 className='text-footnote uppercase font-bold font-montserrat truncate'>el búho</h6>
          <p className='text-footnote uppercase font-bold font-montserrat text-primary-88 truncate'>Arequipa</p>
        </div>
      </div>
      <div className='aspect-w-16 aspect-h-9 rounded-lg'>
        <img className="rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row flex-wrap gap-1'>
          <span className={CategoryBadge.primary}>Category</span>
          <span className={CategoryBadge.primary}>Category</span>
        </div>
        <div className='flex-none'>
          <span className='text-footnote font-medium text-black-50'>21 de marzo de 2023</span>
        </div>
      </div>
      <div>
        <h6 className='text-headline normal-case group-hover:text-primary-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adig elit.</h6>
      </div>
      <div>
        <p className='text-body font-light text-black-75 line-clamp-3 group-hover:text-black-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam habitasse volutpat eget viverra eu nunc, odio faucibus. Sed ornare risus nec, vel odio pharetra. Vitae quam massa nut...</p>
      </div>

    </div>
  )
}

export default NewsCard