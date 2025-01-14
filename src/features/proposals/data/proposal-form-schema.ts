import * as z from 'zod';

export const serviceFormSchema = z.object({
  image: z.union([z.instanceof(File), z.string()]).optional(),
  name: z
    .string({ required_error: 'Service Name is required.' })
    .max(100, 'Service Name must not exceed 100 characters.'),
  description: z.string().optional(),
  serviceCategoryId: z.string().describe('Service Category').optional(),
  serviceSubCategoryId: z.string().describe('Service Sub Category').optional(),
  country: z.enum(['France', 'Luxembourg', 'Belgium']).optional(),
  city: z.string().optional(),
  isActive: z.boolean().default(true).optional(),
});
