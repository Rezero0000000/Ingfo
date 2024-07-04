import { error } from "console";
import { CreateUser, LoginUser } from "../model/user-model";
import { UserServices } from "../services/user-service";
import { Response, UserRequest } from "../types/types";
import { Request } from "hyper-express";

export class UserController {
   static async register (req: Request, res: Response ) {
        try {
            const data: CreateUser = await req.json() as CreateUser 
            const response = await UserServices.register(data)

            res.status(200).json({
                data: response
            });

        }catch (e) {
            res.status(400).json({
                error: e
            })
        }
    }

    static async login (req: Request, res: Response) {
        try {
            const data: LoginUser = await req.json() as LoginUser 
            const response = await UserServices.login(data, res)

            res.status(200).json({
                data: response
            });
        }
        catch(e) {
            res.status(400).json({
                error: e
            })
        }
    }

    static async logout (req: UserRequest, res: Response) {
        try {
            const response = await UserServices.logout (req);
            res.status(200).json({
                message: response
            })
        }
        catch (e) {
            res.status(400).json({
                error: e
            })
        }
    }

}