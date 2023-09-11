import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/create-user-controller";
import { AuthUserController } from "./controllers/user/auth-user-controller";
import { DetailUserController } from "./controllers/user/detail-user-controller";
import { isAutenticated } from "./middlewares/is-authenticated";
import { CreateCategoryController } from "./controllers/category/create-category-controller";
import { ListCategoryController } from "./controllers/category/list-category-controller";
import { CreateProductController } from "./controllers/product/create-product-controller";
import { ListByCategoryController } from "./controllers/product/list-by-category-controller";
import { CreateOrderController } from "./controllers/order/create-order-controller";
import { RemoveOrderCotroller } from "./controllers/order/remove-order-controller";
// Configuração para upload de imagens
import uploadConfig from "./config/multer"

// Iniciando rotas para exportar
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/users', CreateUserController.handle)
router.post('/session', AuthUserController.handle)
router.get('/me', isAutenticated , DetailUserController.handle)

// -- ROTAS CATEGORIES
router.post('/category', isAutenticated, CreateCategoryController.handle)
router.get('/category', isAutenticated, ListCategoryController.handle)

// -- ROTAS PRODUTOS
router.post('/product', upload.single('file'), isAutenticated, CreateProductController.handle)
router.get('/category/product', isAutenticated, ListByCategoryController.handle)

// -- ROTAS ORDERS
router.post('/order', isAutenticated, CreateOrderController.handle)
router.delete('/order/', isAutenticated, RemoveOrderCotroller.handle)

export { router }