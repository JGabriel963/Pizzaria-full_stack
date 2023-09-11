import { Request, Response } from "express";
import { CompletOrderService } from "../../services/order/complet-order-service";

export const CompletOrderController = {
    handle: async(req: Request, res: Response) => {
        const { order_id } = req.body

        const order = await CompletOrderService.execute({
            order_id
        })

        return res.json(order)
    }
}