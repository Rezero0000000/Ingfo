import { Request, Response } from "hyper-express";

export interface Response extends Response {
    inertia(view : string,data? : any) : void
}


export interface Request extends Request {
    user? : any
}
