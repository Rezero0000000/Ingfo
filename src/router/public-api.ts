// import { Server } from "hyper-express";
import hyperexpress from "hyper-express";
import { UserController } from "../controller/user-controller";

const web = new hyperexpress.Router()

web.post("/api/register",UserController.register);
web.post("/api/login",UserController.login);

export default web;