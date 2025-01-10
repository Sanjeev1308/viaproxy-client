import * as z from 'zod';

export const productFormSchema = z.object({
  name: z
    .string({ required_error: 'Product Name is required.' })
    .max(100, 'Service Name must not exceed 100 characters.'),
  description: z.string().optional(),
  productCategoryId: z.string().describe('Product Category').optional(),
  isActive: z.boolean().default(true).optional(),
});
