import hyperExpress from "hyper-express";
import { PostController } from "../controller/post-controller";
import { CategoryController } from "../controller/category-controller";

const api = new hyperExpress.Router();

// Category
api.get("api/category", CategoryController.getCategory);
api.post("/api/category", CategoryController.create);
api.put("/api/category/:id", CategoryController.update)
api.delete("/api/category/:id", CategoryController.remove);

// Post
api.get("/api/post/:id", PostController.get);
api.post("/api/post", PostController.create);
api.put("api/post/:id", PostController.update);
api.delete("/api/post", PostController.remove);

export default api;