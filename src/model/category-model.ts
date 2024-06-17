export type Category = {
    id: number,
    title: string,
    slug: string
}

export type CreateCategoryRequest = {
    title: string,
    slug: string
}

export type CategoryResponse = {
    id: number,
    title: string,
    slug: string
}

export type UpdateCategoryRequest = {
    title?: string,
    slug?: string
}

export function toCategoryResponse (category: Category) {
    return ({
        id: category.id,
        title: category.title,
        slug: category.slug
    })
}