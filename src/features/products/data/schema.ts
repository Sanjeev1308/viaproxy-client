import { z } from 'zod';

const productSchema = z.object({
  _id: z.string(),
  name: z.string(),
  productCategoryId: z
    .object({
      name: z.string(),
    })
    .optional(),
  productSubCategoryId: z.object({ name: z.string() }).optional(),
  description: z.string(),
  isActive: z.boolean(),
  country: z.string().optional(),
  city: z.string().optional(),
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
