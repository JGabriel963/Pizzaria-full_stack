import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/list-order-service";

export const ListOrderController = {
    handle: async(req: Request, res: Response) => {
        const orders = await ListOrdersService.execute();

        return res.json(orders)
    }
}