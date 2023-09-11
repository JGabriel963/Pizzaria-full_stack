import { Request, Response } from "express";
import { AddItemService } from "../../services/order/add-items-service";

export const AddItemController = {
    handle: async(req: Request, res: Response) => {
        const { order_id, product_id, amount } = req.body

        const order = await AddItemService.execute({
            order_id,
            product_id,
            amount
        })

        return res.status(201).json(order)
    }
}