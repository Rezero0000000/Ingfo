import { MiddlewareNext, Request, Response } from "hyper-express";

export class UserController {
   static async register (req: Request, res: Response, next: MiddlewareNext) {
        res.status(200).json({
            data: "Hello :D"
        });
    }
}