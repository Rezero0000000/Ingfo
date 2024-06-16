import { db } from "../application/db";
import { CreateUser, LoginUser, ToUserResponse, User } from "../model/user-model";
import { UserValidation } from "../valiation/user-validation";
import { Validation } from "../valiation/validation";
import bcrypt from "bcrypt"

export class UserServices {
   static async register (req: CreateUser): Promise<User> {
       const validateRequest = Validation.validate(UserValidation.CREATE, req);
       validateRequest.password = await bcrypt.hash(validateRequest.password, 10);

       const isUsernameUsed = await db("users").where("username", validateRequest.username).first()
       const isEmailUsed = await db("users").where("email", validateRequest.email).first();

       if (isEmailUsed) {
        console.log("email kepake")
       }
       if (isUsernameUsed) {
        console.log("username kepakes")
       }

       const dataId = await db("users").insert({
            name: validateRequest.name,
            username: validateRequest.username,
            email: validateRequest.email,
            password: validateRequest.password
       });
       const user = await db('users').where("id", dataId[0]).first();
       return ToUserResponse(user)
   } 

   static async login (req: LoginUser): Promise<void> {
    const validateRequest = Validation.validate(UserValidation.LOGIN, req);
    console.log("we did it")
   }
}