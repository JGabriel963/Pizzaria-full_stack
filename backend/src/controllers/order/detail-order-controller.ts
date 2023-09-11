import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/detail-order-service";

export const DetailOrderController = {
    handle: async(req: Request, res: Response) => {
        const order_id = req.query.order_id as string;

        const orders = await DetailOrderService.execute({
            order_id
        })

        return res.json(orders)
    }
}