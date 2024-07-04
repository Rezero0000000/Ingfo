import hyperExpress from "hyper-express";
import { PostController } from "../controller/post-controller";
import { CategoryController } from "../controller/category-controller";
import { UserController } from "../controller/user-controller";

const api = new hyperExpress.Router();

// User
api.delete("/logout", UserController.logout);

// Category
api.get("/api/category/:categoryId", CategoryController.getCategory);
api.post("/api/category", CategoryController.create);
api.put("/api/category/:categoryId", CategoryController.update)
api.delete("/api/category/:categoryId", CategoryController.remove);

// Post
api.get("/api/post/:id", PostController.get);
api.post("/api/post", PostController.create);
api.put("api/post/:postId", PostController.update);
api.delete("/api/post/:postId", PostController.remove);

export default api;