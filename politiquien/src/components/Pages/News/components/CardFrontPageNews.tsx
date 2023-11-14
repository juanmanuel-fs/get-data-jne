'use client'

import { useRouter } from 'next/navigation'

import CategoryBadge from '@/assets/styles/Badge/CategoryBadge.module.css'

function CardFrontPageNews() {
  const router = useRouter()

  return (
    <div className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] group cursor-pointer" onClick={()=> {router.push('/politichecks')}}>
      <div className='relative aspect-h-9 aspect-w-16 rounded-xl bg-fill-quaternary'>
        <img className="shrink-0 rounded-xl object-cover object-center" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
        <div className='absolute p-2 md:p-6 rounded-xl h-full w-full bg-gradient-to-b from-transparent to-black-50 group-hover:to-black-75 to-100%'>
          <div className='flex flex-col justify-between h-full'>
            <div className='mb-auto'>
              <div className='flex flex-row gap-2 items-center w-full'>
                <img className='h-6 w-auto' src="examples/logo_newspaper.jpg" alt="" />
                <div className='flex flex-col truncate'>
                  <h6 className='text-footnote uppercase font-bold font-montserrat text-black-75 truncate'>el búho</h6>
                  <p className='text-footnote uppercase font-bold font-montserrat text-primary-88 truncate'>Arequipa</p>
                </div>
              </div>
            </div>
            <div className='mt-auto'>
              <div className='flex mb-1 flex-wrap gap-1'>
                <span className={CategoryBadge.cheking}>Category</span>
                <span className={CategoryBadge.cheking}>Category</span>
              </div>
              <p className='line-clamp-3 text-body md:text-title4 text-white-88 group-hover:text-white-100 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFrontPageNews