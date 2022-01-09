const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/', async ()=>{
    res.send('Sensei heroku app')
})

app.listen(process.env.PORT || 5000)