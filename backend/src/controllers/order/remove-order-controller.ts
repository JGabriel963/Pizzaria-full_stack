import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/remove-order-service";

export const RemoveOrderCotroller = {
    handle: async(req: Request, res: Response) => {
        const order_id = req.query.order_id as string;

        const order = await RemoveOrderService.execute({ order_id })

        return res.json(order)
    }
}