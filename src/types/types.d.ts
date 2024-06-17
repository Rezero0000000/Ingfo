import { Request, Response } from "hyper-express";
import { User } from "../model/user-model";

export interface Response extends Response {
    inertia(view : string,data? : any) : void
}

export interface UserRequest extends Request {
    user? : User
}