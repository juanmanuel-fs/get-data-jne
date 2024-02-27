import { Dispatch, ReactElement, SetStateAction } from 'react'

import InputTextStyle from '@/assets/styles/Form/Text.module.css'

interface InputTextInterface {
  type?: string
  value: string 
  name?: string
  change: Function
  placeholder?: string
  autoComplete?: string
  icon?: ReactElement
  isFocus?: boolean
  setIsFocus?: Dispatch<SetStateAction<boolean>>
}

function InputText({value, change, type = 'black', name, placeholder, autoComplete, icon, isFocus, setIsFocus}: InputTextInterface) {
  

  const focused = () => {
    if(!!value) setIsFocus!(true)
    else setIsFocus!(false)
  }

  return (
    !!icon
    ? <div className='flex items-center' style={{position:'relative'}}>
        <span style={{position:'absolute', zIndex:2, paddingLeft: '18px', fontSize:'20px'}}>{icon}</span>
        <input 
          type="text" 
          className={`${InputTextStyle[type]}`} 
          style={{paddingLeft:'52px'}} 
          value={value} 
          name={name}
          onChange={(e) => change(e)} 
          onFocus={!!setIsFocus ? focused : undefined} 
          onKeyDown={!!setIsFocus ? focused : undefined} 
          placeholder={placeholder} 
          autoComplete='off'
        />
      </div>
    : <input type="text" className={`${InputTextStyle[type]}`} name={name} value={value} onChange={(e)=>change(e)} placeholder={placeholder} autoComplete='off'/>
  )
}

export default InputText