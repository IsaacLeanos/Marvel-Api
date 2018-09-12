import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import search from '.marvelapi'

dotenv.config()

const app=express()
app.use(bodyParser.json())

app.use('/marvelapi',search)

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(8080,()=>{console.log('serving on 8080')})