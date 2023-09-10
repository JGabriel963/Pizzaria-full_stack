import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/auth-user-service";

export const AuthUserController = {
    handle: async(req: Request, res: Response) => {
        const { email, password } = req.body

        const auth = await AuthUserService.execute({
            email,
            password
        })

        return res.json(auth)
    }
}