
export type Post = {
    id: number,
    title: string,
    slug: string,
    image?: string,
    body: string,
    user_id: number,
    category_id: number,
}

export type CreatePostRequest = {
    title: string,
    slug: string,
    image?: string,
    body: string,
    user_id: number,
    category_id: number
}

export type UpdatePostRequest = {
    title?: string,
    slug?: string,
    image?: string,
    body?: string,
    category_id?: number
}

export type PostResponse = {
    id: number,
    title: string,
    slug: string,
    image?: string,
    body: string,
    user_id: number,
    category_id: number,
}

export function toPostResponse (post: Post) {
    return ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        image: post.image,
        body: post.body,
        user_id: post.user_id,
        category_id: post.category_id,
    })
}