import { z } from 'zod';

const categorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  categoryType: z.enum(['service', 'product']),
});
export type Categories = z.infer<typeof categorySchema>;

export const categoriesListSchema = z.array(categorySchema);

export const filterFields = [
  {
    label: 'Name',
    value: 'name',
    placeholder: 'Search by name...',
  },
];
