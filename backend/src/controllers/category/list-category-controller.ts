import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/list-category-services";

export const ListCategoryController = {
    handle: async(req: Request, res: Response) => {
        const categories = await ListCategoryService.execute()

        return res.json(categories)
    }
}