const express = require('express')
const app = express()

app.get('/', async (req,res)=>{
    res.send('Sensei heroku app')
})
// PORT: 5000
app.listen(process.env.PORT || 5000)