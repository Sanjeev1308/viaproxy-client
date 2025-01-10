import * as z from 'zod';

export const categoryFormSchema = z.object({
  name: z
    .string({ required_error: 'Service Name is required.' })
    .max(100, 'Service Name must not exceed 100 characters.'),
  description: z.string().optional(),
  categoryType: z.enum(['service', 'product']).default('service'),
});
