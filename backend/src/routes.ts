import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/create-user-controller";
import { AuthUserController } from "./controllers/user/auth-user-controller";
import { DetailUserController } from "./controllers/user/detail-user-controller";
import { isAutenticated } from "./middlewares/is-authenticated";

// Iniciando rotas para exportar
const router = Router();

router.post('/users', CreateUserController.handle)
router.post('/session', AuthUserController.handle)
router.get('/me', isAutenticated , DetailUserController.handle)


export { router }