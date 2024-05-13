import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const app = express()

// midleware
app.use(cors());
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log('server up and running...')
});