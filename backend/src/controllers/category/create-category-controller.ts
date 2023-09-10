import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/create-category-service";

export const CreateCategoryController = {
    handle: async(req: Request, res: Response) => {
        const { name } = req.body

        const category = await CreateCategoryService.execute({ name })

        return res.status(201).json(category);
    }
}