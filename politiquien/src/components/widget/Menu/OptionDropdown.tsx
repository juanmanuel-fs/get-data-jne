'use client'

import { ReactElement } from "react"

interface OptionDropdownInterface {
  title: string
  icon?: ReactElement
  isActive?: boolean
  click?: Function
}

function OptionDropdown({title, icon, isActive, click}: OptionDropdownInterface) {
  return (
    <button onClick={() => !!click && click()} className='block rounded-lg px-4 py-2 text-callout w-full text-left text-gray-500 hover:bg-gray-50 hover:text-gray-700'>
      <div className="flex flex-row gap-3 items-center">
        <span className="text-title3">{icon}</span>{title}
      </div>
    </button>
  )
}

export default OptionDropdown