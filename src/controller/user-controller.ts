import { CreateUser } from "../model/user-model";
import { UserServices } from "../services/user-service";
import { Response, Request } from "../types/types";

export class UserController {
   static async register (req: Request, res: Response ) {
        try {
            const data: CreateUser = await req.json() as CreateUser 
            const response = await UserServices.register(data)

            console.log(response)
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
            const data: CreateUser = await req.json() as CreateUser 
            const response = UserServices.login(data)

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
}