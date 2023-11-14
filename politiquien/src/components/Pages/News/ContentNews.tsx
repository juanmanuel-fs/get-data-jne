import Image from 'next/image'

import Link from 'next/link'

import ButtonStyle from '@/assets/styles/Button/Button.module.css'
import CategoryBadge from '@/assets/styles/Badge/CategoryBadge.module.css'

function ContentNews() {
  return (
    <div className="flex flex-col gap-2">
      <div className='relative aspect-h-16 aspect-w-16 md:aspect-h-9 md:aspect-w-16 -mx-4 -mt-4 lg:m-0 lg:rounded-lg bg-fill-quaternary'>
        <img className="shrink-0 lg:rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
        <div className='absolute p-2 md:p-6 lg:rounded-lg h-full w-full bg-gradient-to-b from-transparent to-black-50 group-hover:to-black-75 to-100%'>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-row mb-auto'>
              <div className='flex flex-row gap-2 items-center w-full'>
                <img className='h-6 w-auto' src="examples/logo_newspaper.jpg" alt="" />
                <div className='flex flex-col truncate'>
                  <h6 className='text-footnote uppercase font-bold font-montserrat text-black-75 truncate'>el búho</h6>
                  <p className='text-footnote uppercase font-bold font-montserrat text-primary-88 truncate'>Arequipa</p>
                </div>
              </div>
              <div className='flex-none ml-auto'>
                <a href='https://elbuho.pe/2023/10/susel-paredes-apoya-rechazo-al-congreso-tras-blindaje-a-alejandro-soto-video/' target='_blank' className={`${ButtonStyle['blur-black']} ${ButtonStyle.small}`}>Ver medio</a>
              </div>
            </div>
            <div className='mt-auto'>
              <p className='line-clamp-3 text-body md:text-title4 text-white-88 group-hover:text-white-100 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex mb-1 flex-wrap gap-1'>
          <span className={CategoryBadge.primary}>Category</span>
          <span className={CategoryBadge.primary}>Category</span>
        </div>
        <div className='flex-none'>
          <span className='text-footnote font-normal text-black-50'>21 de marzo de 2023</span>
        </div>
      </div>
      <div className='mt-2'>
        <h6 className='text-headline font-semibold capitalize mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet,consectetur adipiscing elit adipiscing elit  dolor sit amet, consectetur adipiscing elit ipsum dolo.</h6>
        <p className='mb-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sagittis dui nec, orci. Justo, dis massa, justo, in faucibus sit ultrices varius. A, leo purus eleifend netus facilisi. Magna sit sodales aenean eu sodales arcu montes, pellentesque. Sit et rhoncus sagittis egestas donec netus dapibus. Feugiat scelerisque ipsum nibh sem nibh ante. Parturient aliquam, a lacus leo, cras porttitor sit donec. Sed est sociis mauris, quisque in nisl sed. Et consectetur mattis placerat tempus, lobortis est non scelerisque.
        </p>
        <p className='mb-2'>
        Ut vel hac condimentum id cras. Quis viverra aliquet eget nisl amet est sed eget. Pellentesque nunc sit est sagittis, egestas morbi metus, nunc. Imperdiet lobortis massa quam venenatis ornare nibh ultricies. Porta massa eu sed proin mattis est, faucibus lorem. Id congue vulputate lorem elit at dolor nascetur feugiat. Id rhoncus ultrices dis vitae, at nec, auctor facilisi hac. Feugiat odio enim aliquam facilisi eleifend id egestas varius. Amet felis id sit vitae neque libero arcu. Quisque congue massa nec nam tristique quam.
        </p>
      </div>
      <div>
        <div className='flex flex-wrap gap-1'>
          <span className={CategoryBadge.primary}>Etiqueta 1</span>
          <span className={CategoryBadge.cheking}>Etiqueta 2</span>
        </div>
      </div>
    </div>
  )
}

export default ContentNews