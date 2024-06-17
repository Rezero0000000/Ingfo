import { Response } from "hyper-express";
import { db } from "../application/db";
import { CreateUser, LoginUser, ToUserResponse, User } from "../model/user-model";
import { UserValidation } from "../valiation/user-validation";
import { Validation } from "../valiation/validation";
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid";
import { UserRequest } from "../types/types";

export class UserServices {
   static async register (req: CreateUser): Promise<User> {
       const validatedRequest = await Validation.validate(UserValidation.CREATE, req);
       validatedRequest.password = await bcrypt.hash(validatedRequest.password, 10);

       const isUsernameUsed = await db("users").where("username", validatedRequest.username).first()
       const isEmailUsed = await db("users").where("email", validatedRequest.email).first();

       if (isEmailUsed) {
        console.log("email kepake")
       }
       if (isUsernameUsed) {
        console.log("username kepakes")
       }

       const dataId = await db("users").insert({
            name: validatedRequest.name,
            username: validatedRequest.username,
            email: validatedRequest.email,
            password: validatedRequest.password
       });
       const user = await db('users').where("id", dataId[0]).first();
       return ToUserResponse(user)
   } 

   static async login (req: LoginUser, res: Response): Promise<User> {
        const validatedRequest = await Validation.validate(UserValidation.LOGIN, req);

        const isEmailMatch = await db("users").where("email", validatedRequest.email).first();
        
        if (!isEmailMatch) {
            res.status(400).json({
                message: "Email or password is wrong"
              })
              res.end();
    
        }

        const isPasswordMatch = await bcrypt.compare(validatedRequest.password, isEmailMatch.password);

        if (!isPasswordMatch) {
            res.status(400).json({
                message: "Email or passsword is wrong"
              })
              res.end();
        }

        const token = uuid();
        await db("users").where("email", validatedRequest.email).first().update({
            token: token
        });
        isEmailMatch.token = token
        console.log(isEmailMatch)
        return ToUserResponse(isEmailMatch);
   }

   static async logout (req: UserRequest): Promise<string> {
    const status = await db("users").where("token", req.user!.token).update({
        token: null
    });

    if (!status) {
        console.log("Gagal logout");
    }

    return "Bye Bye"
   }
}