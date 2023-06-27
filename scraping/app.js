import express, { json } from "express"
import cors from "cors"

import fs from "fs"
const path = "./data/process-1.json"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.post('/', (req, res) => {
    fs.readFile(path,function(err, data) {
      if (err) return 'error writing file: ' + err
      const readData = JSON.parse(data)
      readData.push(req.body)
      
      fs.writeFile(path, JSON.stringify(readData, null, 2), function(err) {
          if (err) throw 'error writing file: ' + err
      })
      res.status(200).json({resp : true})
    })
    
  }
)

app.get('/total', (req, res) => {
  let countData = 0
  fs.readFile(path,function(err, data) {
    if (err) return 'error writing file: ' + err
    const readData = JSON.parse(data)
    countData = readData.length
    res.status(200).json({resp: countData})
  })
})

app.get('/:id', (req, res) => {
  
  fs.readFile(path,function(err, data) {
    if (err) return 'error writing file: ' + err
    const readData = JSON.parse(data)
    const dataId = readData.find(data => data.datoGeneral.idHojaVida == req.params['id']) ?? null
    if(!!dataId){
      res.status(200).json({resp: dataId})
    }
    else {
      res.status(400).json({resp: 'no se encontró'})
    }
  })
})

const port = 8000
app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://0.0.0.0:${port}`)
})