import { Request, Response } from "hyper-express";

export class PostController {
    static async create (req: Request, res: Response) {
        try {
        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }
    }

    static async remove (req: Request, res: Response) {
        try {

        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }
    }
}