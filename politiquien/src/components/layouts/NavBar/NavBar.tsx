'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react';

import SearchNavBar from './SearchNavBar';
import RecommendCardNavBar from './RecommendCardNavBar';
import { usePathname } from 'next/navigation';
import TextSelect from '@/components/widget/Form/TextSelect';

const processData = [
  {
    id: 12,
    name: 'REGIONALES Y MUNICIPALES 2022',
  },
  {
    id: 14,
    name: 'GENERALES 2021',
  },
  {
    id: 3,
    name: 'PARLAMENTALES 2020',
  }
]

function NavBar() {
  const [isNarrowScreen, setIsNarrowScreen] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [valueSearchNavBar, setValueSearchNavBar] = useState<string>('')
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [process, setProcess] = useState<any>(processData[0])
  const [processes, setProcesses] = useState<any []>(processData)

  const handleSelect = (id: number, name: string) => {
    setProcess(processes.find(processTemp => processTemp.id == id))
  }

  const currentPage = usePathname()

  useEffect(()=>{
    if (!!valueSearchNavBar && isOpenMenu) {
      setIsOpenMenu(false)
      setToggleMenu(false)
    }
  },[valueSearchNavBar])

  const toggleCheck = ()=> {
    setToggleMenu(!toggleMenu)
    if (!!valueSearchNavBar && !isOpenMenu) {
      setValueSearchNavBar('')
      setIsOpenMenu(true)
    }
  }

  useEffect(()=>{
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 1023px)")

    //watch for updates
    function updateIsNarrowScreen(e: any) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }
  },[isNarrowScreen])

  useEffect(() => {
    const isOpenMenuTime = setTimeout(()=> {
      setIsOpenMenu(false)
      setToggleMenu(false)
      clearTimeout(isOpenMenuTime)
    },500)
  },[currentPage])

  const active = 'text-white-100 font-normal'

  const pages = <>
                  <li className={currentPage === '/' ? active: ''}>
                    <Link href='/'>INICIO</Link>
                  </li>
                  <li className={currentPage === '/elecciones' ? active: ''}>
                    <Link href='/elecciones'>ELECCIONES</Link>
                  </li>
                  <li className={currentPage === '/noticias' ? active: ''}>
                    <Link href='/noticias'>NOTICIAS</Link>
                  </li>
                  <li className={currentPage === '/candidatos' ? active: ''}>
                    <Link href='/candidatos'>CANDIDATOS</Link>
                  </li>
                  <li className={currentPage === '/politichecks' ? active: ''}>
                    <Link href='/politichecks'>POLITICHECKS</Link>
                  </li>
                  <li className={currentPage === '/organizaciones' ? active: ''}>
                    <Link href='/organizaciones'>ORGANIZACIONES</Link>
                  </li>
                </>

  return (
    <>
      <div className='lg:hidden'>
        <div className='mb-3'>
          <div className='flex flex-row gap-6 justify-between items-center'>
            <Image height={'32'} width={'140'} src="logos/logo_primary.svg" alt="logo politiquién" />
            <TextSelect name='proccess' options={processes} value={process.id} change={handleSelect} placeholder='Seleccione un proceso'/>
          </div>
        </div>
        <div className='flex flex-row gap-4 items-center justify-between'>
          <div className='flex-auto'>
            <SearchNavBar valueSearchNavBar={valueSearchNavBar} setValueSearchNavBar={setValueSearchNavBar} /> 
          </div>
          <div className="content-burger">
            <input type="checkbox" id="toggle" onClick={() => {setIsOpenMenu(!isOpenMenu)}} onChange={toggleCheck} checked={toggleMenu}/>
            <label htmlFor="toggle" className="burger">
              <span className="bun bun-top"></span>
              <span className="bun bun-center"></span>
              <span className="bun bun-bottom"></span>
            </label>
          </div>
        </div>
        {
          isOpenMenu && 
            <div className='fixed z-10 left-0 right-0 bottom-0 top-[100px] bg-primary-100 backdrop-blur-30 flex flex-col p-4'>
              <div className='h-full pt-10 pb-14 max-h-[400px]'>
                <ul className='h-full flex flex-col justify-between items-center w-full text-white-75 uppercase text-headline font-montserrat'>
                  {pages}
                </ul>
              </div>
              {/* Recommend news */}
              { !!isNarrowScreen && 
                  <div className='flex flex-col mx-auto gap-2 mt-auto max-w-md'>
                    <RecommendCardNavBar/>
                    <RecommendCardNavBar/>
                  </div>
              }
            </div>
        }
      </div>
      <div className='hidden lg:block'>
        <div className='mb-6'>
          <div className='flex flex-row gap-6 justify-between items-center'>
            <Image className='' height={'44'} width={'230'} src="logos/logo_primary.svg" alt="logo politiquién" />
            <div className='text-right'>
              <span className='block text-headline font-normal text-white-50'>Elección:</span>
              <TextSelect name='proccess' options={processes} value={process.id} change={handleSelect} placeholder='Seleccione un proceso'/>
            </div>
          </div>
        </div>
        <nav className='flex flex-row items-center justify-between'>
          <div className='flex-auto mr-16 overflow-x-auto'>
            <ul className=' flex flex-row gap-4 justify-between text-white-75 w-full uppercase text-headline font-montserrat '>
              {pages}
            </ul>
          </div>
          <div className='md:flex-auto'>
            <div className='hidden md:block min-w-[320px]'>
              <SearchNavBar valueSearchNavBar={valueSearchNavBar} setValueSearchNavBar={setValueSearchNavBar}/>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar