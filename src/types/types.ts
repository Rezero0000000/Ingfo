import { Response } from "hyper-express";

export interface RResponse extends Response {
    inertia(view : string,data? : any): void
}