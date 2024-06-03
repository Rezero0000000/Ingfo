import { Response, Request } from "../types/types";

export class UserController {
   static async register (req: Request, res: Response ) {
    console.log("Hwi")
        res.inertia("Test", {title: "HI"});
        // res.json({
        //     data: "Hello :D"
        // })
    }
}