import ButtonStyle from '@/assets/styles/Button/Button.module.css'
import Link from 'next/link'

function FrontPageHome() {
  return (
    <div className='py-12 px-4 md:px-16 bg-black-5 -mt-4 -mx-4 md:mt-0 md:mx-0 md:rounded-xl bg-no-repeat bg-cover bg-center' style={{backgroundImage : "url('examples/front_page.png')"}}>
      <div className='max-w-xl font-montserrat'>
        <h1 className='text-title1 text-white-100'>ELECCIONES<br/> REGIONALES Y MUNICIPALES <br/>2022</h1>
        <div className='flex gap-4 mt-6 mb-1 text-title4 font-semibold text-white-88'>
          <span className='block'>+ 54355 CANDIDATOS</span>
          <span className='block'>+ 155 ORGANIZACIONES</span>
        </div>
        <span className='text-headline font-semibold mb-6 text-white-75 block'>Regional | Provincial | Distrital</span>
        <div className='flex flex-row gap-2 md:gap-4'>
          <Link href='/candidatos' className={`${ButtonStyle.primary} flex-none block`}>VER CANDIDATOS</Link>
          <Link href='/organizaciones' className={`${ButtonStyle['blur-black']} block truncate`}>VER ORGANIZACIONES</Link>
        </div>
      </div>
    </div>
  )
}

export default FrontPageHome