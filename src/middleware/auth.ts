import { MiddlewareNext, Response } from "hyper-express";
import { UserRequest } from "../types/types";
import { db } from "../application/db";

export const authMiddleware = async (req:UserRequest, res: Response, next: MiddlewareNext) => {
    const token = req.get('X-API-TOKEN');

    if (token) {
        const user = await db("users").where("token", token).first(); 

        if (user) {
            req.user = user;
            next();
            return;
        }
    }

    res.status(401).json({
        errors: "Unauthorized"
    });
    res.end()
}

