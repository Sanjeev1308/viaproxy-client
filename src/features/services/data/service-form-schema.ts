import * as z from 'zod';

export const serviceFormSchema = z.object({
  name: z
    .string({ required_error: 'Service Name is required.' })
    .max(100, 'Service Name must not exceed 100 characters.'),
  description: z.string().optional(),
  serviceCategoryId: z.string().describe('Service Category').optional(),
  isActive: z.boolean().default(true).optional(),
});
