import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/create-order-service";

export const CreateOrderController = {
    handle: async(req: Request, res: Response) => {
        const { table, name } = req.body;

        const order = await CreateOrderService.execute({ table, name })

        return res.status(201).json(order)
    }
}