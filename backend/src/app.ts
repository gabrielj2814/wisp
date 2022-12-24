import express, { Request, Response } from "express"
import dotenv from "dotenv"
import logger from "morgan"
import cors from "cors"
import path from "path"

let app = express()
dotenv.config({path:path.resolve(__dirname,"../.env")})
let rutaPublic:string=path.resolve(__dirname,"../upload")
let {PORT} = process.env 

// Set

app.set("PORT",PORT || 5500)

// Get

app.get("/help",(req:Request,res:Response) => {
    res.status(200).send("servidor corriendo con exito")
})

// Middleware

app.use(cors())
.use(express.json())
.use(express.static(rutaPublic))
.use(logger("dev"))

// endpoints V1

export default app