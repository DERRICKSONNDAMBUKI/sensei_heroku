const express = require('express')
const app = express()

app.get('/', async (req,res)=>{
    res.send('Sensei heroku app')
})

app.listen(process.env.PORT || 5000)