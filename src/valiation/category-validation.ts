import {z, ZodType } from "zod";

export class CategoryValidation  {
    static CREATE: ZodType<any> = z.object({
        title: z.string().min(1).max(100),
        slug: z.string().min(1).max(100)
    }); 
}