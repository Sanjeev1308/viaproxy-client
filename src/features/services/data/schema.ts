import { z } from 'zod';

const serviceSchema = z.object({
  _id: z.string(),
  name: z.string(),
  serviceCategoryId: z
    .object({
      name: z.string(),
    })
    .optional(),
  serviceSubCategoryId: z.object({ name: z.string() }).optional(),
  isActive: z.boolean(),
  description: z.string(),
  country: z.string().optional(),
  city: z.string().optional(),
});
export type Services = z.infer<typeof serviceSchema>;

export const serviceListSchema = z.array(serviceSchema);

export const filterFields = [
  {
    label: 'Name',
    value: 'name',
    placeholder: 'Search by name...',
  },
];
