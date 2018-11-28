const express = require('express')
const http = require('http')
const app = express()

app.get('/',function(req,res){
    res.send([
        {
            id:1
        }
    ])
})

http.createServer(app).listen(3001, () => console.log('node localsever start success!'));