import { IoMailOutline } from "react-icons/io5";

import Image from 'next/image'
import React from 'react'
import IconAccordion from "@/components/Accordion/IconAccordion";

function Footer() {
  return (
    <>
      <div className='flex gap-6 flex-col  md:flex-row'>
        <div className='basis-full md:basis-1/2'>
          <Image className='h-6 md:h-10 w-auto' height='40' width='40' src="logos/logo_secondary.svg" alt='' />
          <div className='flex flex-col gap-4 mt-4'>
            <p className='text-callout text-white-75 font-light'>Sistema web de procesos electorales de anticorrupción del Perú.</p>
            <div className="flex gap-2 items-center">
              <IoMailOutline/>
              <span className="text-callout">contacto@politiquien.pe</span>
            </div>
          </div>
        </div>
        <div className='basis-full md:basis-1/2'>
          <div className="flex flex-col font-montserrat text-headline">
            <IconAccordion title="Informate"><p>example</p></IconAccordion>
            <hr className="bg-black-22 my-0 border-white-22"/>
            <IconAccordion title="Acerca de PolitiQuién"><p>example</p></IconAccordion>
            <hr className="bg-black-22 my-0 border-white-22"/>
            <IconAccordion title="Únete a nosotros"><p>example</p></IconAccordion>
            <hr className="bg-black-22 my-0 border-white-22"/>
            <IconAccordion title="Medios aliados"><p>example</p></IconAccordion>
            <hr className="bg-black-22 my-0 border-white-22"/>
            <IconAccordion title="Auspiciadores"><p>example</p></IconAccordion>
          </div> 
        </div>

      </div>
      <hr className="bg-black-22 my-4 items-center border-white-22"/>
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <p className='text-callout text-white-75 text-center'>Copyright &copy; 2022 politiquien.pe todos los derechos reservados</p>
        <p className=' flex-none text-callout text-white-100 '>By @thejuanmas_</p>
      </div>
    </>
  )
}

export default Footer