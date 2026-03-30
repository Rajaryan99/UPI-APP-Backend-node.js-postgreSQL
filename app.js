import express from 'express'
import 'dotenv/config'
import { Pool } from 'pg'
const pool = new Pool()


const app = express();

const port = process.env.PORT;





app.get('/', (req, res) => {
    res.send("Hello Wolrd")
    res.send(result)
})

app.listen(port, (req, res) => {
    console.log(`server is running http://localhost:${port}`)
})