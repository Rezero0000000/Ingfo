// import { Server } from "hyper-express";
import hyperexpress from "hyper-express";
import { UserController } from "../controller/user-controller";

const web = new hyperexpress.Router()

web.get("/user/login",UserController.register);

export default web;