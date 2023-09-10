import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}

export function isAutenticated(req: Request, res: Response, next: NextFunction) {
    
    // Receber o token
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(
            token, 
            process.env.JWT_SECRET,
        ) as PayLoad;
        
        // Recuperar o id e colocar dentro de uma variável user_id para toda a aplicação
        req.user_id = sub;

        return next();

    } catch (error) {
        if (error instanceof Error) {
            return res.status(401).json({ error: error.message})
        }
    }
}