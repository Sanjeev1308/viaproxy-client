import * as z from 'zod';

export const productFormSchema = z.object({
  image: z.union([z.instanceof(File), z.string()]).optional(),
  name: z
    .string({ required_error: 'Product Name is required.' })
    .max(100, 'Service Name must not exceed 100 characters.'),
  description: z.string().optional(),
  productCategoryId: z.string().describe('Product Category').optional(),
  productSubCategoryId: z.string().describe('Product Sub Category').optional(),
  country: z.enum(['France', 'Luxembourg', 'Belgium']).optional(),
  city: z.string().optional(),
  isActive: z.boolean().default(true).optional(),
});
