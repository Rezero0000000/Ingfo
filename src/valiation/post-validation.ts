import { z, ZodType } from "zod";

export class PostValidation  {
    static CREATE: ZodType<any> = z.object ({
        title: z.string().min(1).max(100),
        slug: z.string().min(1).max(100),
        image: z.string().min(1).max(100).optional(),
        body: z.string().min(1).max(100),
        user_id: z.number().min(1).max(100),
        category_id: z.number().min(1).max(100)
    });

    static UPDATE: ZodType<any> = z.object ({
        title: z.string().min(1).max(100).optional(),
        slug: z.string().min(1).max(100).optional(),
        image: z.string().min(1).max(100).optional(),
        body: z.string().min(1).max(100).optional(),
        category_id: z.number().min(1).max(100).optional()
    })

}