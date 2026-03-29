import express from 'express'
import 'dotenv/config'

const app = express();

const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send("Hello Wolrd")
})

app.listen(port, (req, res) => {
    console.log(`server is running http://localhost:${port}`)
})