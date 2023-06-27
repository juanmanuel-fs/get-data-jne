import axios from 'axios'
import './App.css'
import { useState } from 'react'

const URLJNE = 'https://apiplataformaelectoral8.jne.gob.pe/api/v1/candidato/hoja-vida?IdHojaVida='
const API = 'http://localhost:8000/'

const initialRange = {
  initial: 0,
  final: 0,
}

const initialCount = {
  successes: 0,
  errors: 0,
}

export default function App() {
  const [isScraping, setIsScraping] = useState(false)
  const [data, setData] = useState([])
  const [tilte, setTitle] = useState('')
  const [count, setCount] = useState(initialCount)
  const [errors , setErrors] = useState([])
  const [range, setRange] = useState(initialRange)
  const [porcent, setPorcent] = useState(0)
  const [type, setType] = useState(0)

  const handleChange = (e) => {
    let temp = {...range}
    temp[e.target.name] = e.target.value

    if(e.target.name  == 'initial' && e.target.value > range.final){
      temp['final'] = e.target.value
    }

    setRange({...temp})
  }

  const save = async (data) => {
    await axios.post(API,data, {
      headers : {
        'Content-Type' : 'application/json'
      }
    })
  }

  const verifyJNE = async () => {
    setType(1)
    setTitle(`Verificando datos [${range.initial} - ${range.final}]`)
    setIsScraping(true)
    setData({})
    setCount({...initialCount, successes: 0, errors: 0})

    let tempIdProcess = 0
    let breakLoop = false
    for (let index = range.initial; index <= range.final; index++) {
      try{
        await axios(URLJNE+index)
        .then(res => {
          if(tempIdProcess === 0){
            tempIdProcess = res.data.datoGeneral.idProcesoElectoral
            console.log(tempIdProcess, res.data.datoGeneral.idProcesoElectoral)
          }
          if(tempIdProcess != res.data.datoGeneral.idProcesoElectoral){
            setData(res.data)
            breakLoop = true
          }else{
            tempIdProcess = res.data.datoGeneral.idProcesoElectoral
          }
          count.successes = count.successes+1
          setCount({...count})
        })
      }
      catch(err){
        count.errors = count.errors+1
        setCount({...count})
        errors.push(index)
        setErrors(errors)
      }
      if(breakLoop){
        break
      }
      const currentPorcent = (index - range.initial) * 100 / (range.final-range.initial)
      setPorcent(currentPorcent)
    }
    setIsScraping(false)
  }

  const findErrors = async () => {
    setType(3)
    setTitle(`Verificando datos de ids [${range.initial} - ${range.final}]`)
    setIsScraping(true)
    setCount({...initialCount, successes: 0, errors: 0})
    setData([])
    setErrors([])

    for (let countIndex = 0 , index = range.initial; index <= range.final; index++, countIndex++) {
      try{
        await axios(API+index)
        .then(() => {
          count.successes = count.successes+1
          setCount({...count})
          data.push(index)
          setData(data)
        })
        .finally(() => {
        })
      }
      catch(err){
        count.errors = count.errors+1
        setCount({...count})
        errors.push(index)
        setErrors(errors)
      }
      const currentPorcent = countIndex * 100 / (range.final-range.initial)
      setPorcent(currentPorcent)
    }
    setIsScraping(false)
  }

  const scrapingJNE = async () => {
    setType(2)
    setTitle(`Scrapeando datos [${range.initial} - ${range.final}]`)
    setIsScraping(true)
    setCount({...initialCount, successes: 0, errors: 0})
    setData([])

    for (let countIndex = 0 , index = range.initial; index <= range.final; index++, countIndex++) {
      try{
        await axios(URLJNE+index)
        .then(res => {
          count.successes = count.successes+1
          setCount({...count})
          save(res.data)
        })
        .finally(() => {
        })
      }
      catch(err){
        count.errors = count.errors+1
        setCount({...count})
        errors.push(index)
        setErrors(errors)
      }
      const currentPorcent = countIndex * 100 / (range.final-range.initial)
      setPorcent(currentPorcent)
    }
    setIsScraping(false)
  }

  return (
    <div className='flex min-h-screen'>
      <div className='fixed min-w-[320px] h-full p-4'>
        <h2 className=''>Scraping JNE</h2>
        <div className="mt-8">
          <div className='grid grid-cols-1 gap-2 mb-4'>
            <div className='text-left'>
              <label htmlFor="" className='mb-1 block'>Valor inicial:</label>
              <input type="text" name="initial" className='px-4 py-2 rounded-xl border-none w-full block' placeholder='Ingresa initial id' value={range.initial} onChange={e => handleChange(e)}/>
            </div>
            <div className='text-left'>
              <label htmlFor="" className='mb-1 block'>Valor final:</label>
              <input type="text" name="final" className='px-4 py-2 rounded-xl border-none w-full block' placeholder='Ingresa final id' value={range.final} onChange={e => handleChange(e)}/>
            </div>
          </div>
          <div className='flex justify-between'>
            <button disabled={isScraping} onClick={verifyJNE}>Verificar</button>
            <button disabled={isScraping} onClick={findErrors}>Ids</button>
            <button disabled={isScraping} onClick={scrapingJNE}>Scrapear</button>
          </div>      
        </div>

      </div>
      <div className='flex-auto ml-[320px] min-h-full bg-black p-4 overflow-auto'>
        {
          type == 1 &&
          <>
            <h4 className='text-3xl font-semibold mb-4'> {tilte}</h4>
            <div className=''>
              <div className='bg-[#242424] h-4 rounded-full p-1'>
                <div className={`bg-[#4aff65] h-2 rounded-full transition-all duration-500 ease-out`} style={{width: porcent+'%'}}></div>
              </div>
              <p>Total: {count.errors + count.successes}</p>
              <pre>{JSON.stringify(data,null,2)}</pre>
            </div>
          </> 
        }
        {
          type == 2 &&
          <>
            <h4 className='text-3xl font-semibold mb-4'> {tilte}</h4>
            <div className=''>
              <div className='bg-[#242424] h-4 rounded-full p-1'>
                <div className={`bg-[#4aff65] h-2 rounded-full transition-all duration-500 ease-out`} style={{width: porcent+'%'}}></div>
              </div>
              <p>Total: {count.errors + count.successes}</p>
              <p>Exitodos: {count.successes}</p>
              <p>Total Errores: {count.errors}</p>
              <p>Errores: {JSON.stringify(errors)}</p>
            </div>
          </> 
        }

        {
          type == 3 &&
          <>
            <h4 className='text-3xl font-semibold mb-4'> {tilte}</h4>
            <div className=''>
              <div className='bg-[#242424] h-4 rounded-full p-1'>
                <div className={`bg-[#4aff65] h-2 rounded-full transition-all duration-500 ease-out`} style={{width: porcent+'%'}}></div>
              </div>
              <p>Total: {count.errors + count.successes}</p>
              <p>Exitodos: {count.successes}</p>
              <p>Total Errores: {count.errors}</p>
              <p>Errores: {JSON.stringify(errors)}</p>
              <pre>{JSON.stringify(data)}</pre>
            </div>
          </> 
        }
      </div>
    </div>
  )
}

