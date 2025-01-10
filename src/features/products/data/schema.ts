import { z } from 'zod';

const productSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
});
export type Products = z.infer<typeof productSchema>;

export const productsListSchema = z.array(productSchema);

export const filterFields = [
  {
    label: 'Name',
    value: 'name',
    placeholder: 'Search by name...',
  },
];
