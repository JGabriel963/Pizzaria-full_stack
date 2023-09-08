import { Router, Request, Response } from "express";

// Iniciando rotas para exportar
const router = Router();

router.get('/', (req: Request, res: Response) => {
    throw new Error("Error ao realizar requisição!")
})

export { router }