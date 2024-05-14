import { MiddlewareNext, Request, Response } from "hyper-express";
import { RResponse } from "../types/types";

export class UserController {
   static async register (req: Request, res: RResponse , next: MiddlewareNext) {
        // res.status(200).json({
        //     data: "Hello :D"
        // });

        res.inertia("Test", {title: "HI"});
    }
}