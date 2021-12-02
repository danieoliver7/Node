const express = require('express')
const bodyParse = require('body-parser')   
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')



const app = express()
const port = 4000

userRoute(app)

app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req, res) => res.send('Olá, Mundo pelo express'))

app.listen(port, () => console.log('Api rodando na porta ',{port}))
