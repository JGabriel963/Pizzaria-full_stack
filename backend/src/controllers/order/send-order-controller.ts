import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/send-order-service";

export const SendOrderController = {
    handle: async(req: Request, res: Response) => {
        const { order_id } = req.body

        const order = await SendOrderService.execute({
            order_id
        })

        return res.json(order)
    }
}