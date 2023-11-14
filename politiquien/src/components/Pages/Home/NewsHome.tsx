import Link from 'next/link'

import CardNews from '../../Cards/NewsCard'
import { GoArrowRight } from 'react-icons/go'

import ButtonStyle from '@/assets/styles/Button/Button.module.css'

function NewsHome() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row justify-between items-end'>
        <h2 className='text-title2'>NOTICIAS</h2>
        <Link href='' className='text-primary-75 hover:text-primary-100'>
          <span className='flex gap-2 items-center font-medium'>
            Ver más <GoArrowRight className='text-2xl'/>
          </span>
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <CardNews/>
        <CardNews/>
        <CardNews/>
        <CardNews/>
        <CardNews/>
        <CardNews/>
      </div>
      <div className='mt-4 flex'>
        <Link href='/noticias' className={`${ButtonStyle.black} flex flex-row items-center gap-2`}>VER MÁS NOTICIAS <GoArrowRight className='text-xl'/></Link>
      </div>
    </div>
  )
}

export default NewsHome