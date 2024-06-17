import hyperExpress from "hyper-express";
import { PostController } from "../controller/post-controller";
import { CategoryController } from "../controller/category-controller";
const api = new hyperExpress.Router();

// Category
api.post("/api/category", CategoryController.create);
api.delete("/api/category/:id", CategoryController.remove);

// Post
api.post("/api/post", PostController.create);
api.delete("/api/post", PostController.remove);

export default api;