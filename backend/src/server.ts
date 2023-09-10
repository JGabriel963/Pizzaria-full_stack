import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import cors from 'cors'
import path from 'path'

import { router } from "./routes";

// Inicindo aplicação 
const app = express();
app.use(express.json()) 

app.use(cors()) // Abilitando cors para todos

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, "..", 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        //Se for uma instância do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: "Internal server error."
    })

})

// Escutando port 300
app.listen(3000, () => {
    console.log('Started!')
})