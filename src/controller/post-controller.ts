import { Request, Response } from "hyper-express";
import { UserRequest } from "../types/types";
import { CreatePostRequest, UpdatePostRequest } from "../model/post-model";
import { PostService } from "../services/post-service";

export class PostController {
    static async get (req: UserRequest, res: Response) {
        try {
            await PostService.getPost();
        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }
    }

    static async create (req: UserRequest, res: Response) {
        try {
            const request:  CreatePostRequest = await req.json() as CreatePostRequest;
            request.user_id = req.user!.id;

            const response = await PostService.create(request);

            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }
    }

    
    static async remove (req: UserRequest, res: Response) {
        try {
            const id = Number(req.params.postId);
            const response = await PostService.remove(id);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }
    }

    static async update (req: UserRequest, res: Response) {
        try {
            const request: UpdatePostRequest = await req.json() as UpdatePostRequest
            const id = Number(req.params.postId);
            const userId = req.user!.id
            const response = await PostService.update(request, id, userId);
            res.status(200).json({
                data: response
            });
        }
        catch (e) {
            res.status(400).json({
                message: e
            })
        }
    }
}