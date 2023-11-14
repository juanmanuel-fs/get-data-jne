import React, { ChangeEvent, useState } from 'react'
import CategoryButtonStyle from '@/assets/styles/Button/Category.module.css'

interface CategoryCheckboxProps{
  label: string
  name?: string
  checked?: boolean
  index: number
  change: Function
  value: number
}

function CategoryCheckbox({label, index, change, value, checked= false}: CategoryCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const changed = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    setIsChecked(!isChecked)
    change(e)
  }

  return (
    <div>
      <input 
        type="checkbox"
        className='select-none cursor-pointer hidden'
        id={`category-check-${index}`}
        name={`category-check-${index}`}
        value={value}
        checked={isChecked}
        onChange={(e) => changed(e)}
      />
      <label htmlFor={`category-check-${index}`} className={isChecked? CategoryButtonStyle.black : CategoryButtonStyle.light}>{label}</label>
    </div>
  )
}

export default CategoryCheckbox