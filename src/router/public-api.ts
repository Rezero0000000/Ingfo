import { Server } from "hyper-express";
import { UserController } from "../controller/user-controller";

export const web = new Server();

web.get("/user/login", UserController.register);