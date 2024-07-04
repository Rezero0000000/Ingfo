import { db } from "../application/db";
import { CreatePostRequest, Post, PostResponse, toPostResponse, UpdatePostRequest } from "../model/post-model";
import { PostValidation } from "../valiation/post-validation";
import { Validation } from "../valiation/validation";

export class PostService {
    static async create (req: CreatePostRequest): Promise<PostResponse> {
        const validatedRequest = await Validation.validate(PostValidation.CREATE, req);
        const isSlugUsed = await db("posts").where("slug", validatedRequest.slug).first();

        if (isSlugUsed){
            console.log("slug sudah digunakan")
        }

        const dataId = await db("posts").insert({
            title: validatedRequest.title,
            slug: validatedRequest.slug,
            image: validatedRequest.image,
            body: validatedRequest.body,
            user_id: validatedRequest.user_id,
            category_id: validatedRequest.category_id
        });

        const post = await db("posts").where("id", dataId[0]).first();
        return toPostResponse(post);
    }

    static async getPost () {
            // get normal post
            let post = await db("posts").where("id", 2).first();
            // console.log(post);

            // get post from category
            const note = await db('categories')
            .where('categories.id', 20)
            .join('posts', 'categories.id', 'posts.category_id')
            .select(
              'categories.*',
              db.raw('JSON_ARRAYAGG(JSON_OBJECT("id", posts.id, "title", posts.title, "body", posts.body, "created_at", posts.created_at)) AS posts')
            )
            .groupBy('categories.id').first();
            // console.log(note)

            // get category from post
            const note2 = await db('posts')
            .where('posts.id', 2)
            .join('categories', 'posts.category_id', 'categories.id')
            .select('categories.*')
            .groupBy('categories.id').first();
            console.log(note2)   
    }

    static async remove (id: number): Promise<string> {
        const status = await db("posts").where("id", id).del();
        if (!status) {
            console.log("Gagal")
        }
        return "OK"
    }

    static async update (req: UpdatePostRequest, id: number, user_id: number): Promise<Post> {
        const validatedRequest = await Validation.validate(PostValidation.UPDATE, req);

        const status = await db("posts").where("id", id).update({
            title: validatedRequest.title,
            slug: validatedRequest.slug,
            image: validatedRequest.image,
            body: validatedRequest.body,
            user_id: user_id,
            category_id: validatedRequest.category_id
        });

        if (!status) {
            console.log("GAGAL")
        }

        const post = await db("posts").where("id", id).first();
        return toPostResponse(post);
    }
}