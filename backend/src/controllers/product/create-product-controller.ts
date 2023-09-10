import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/create-product-service";

export const CreateProductController = {
    handle: async (req: Request, res: Response) => {
        const { name, price, description, category_id } = req.body

        if(!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: banner } = req.file;

            const product = await CreateProductService.execute({ 
                name, 
                price, 
                description, 
                banner, 
                category_id
            })
    
            return res.status(201).json(product)
        }

    }
}