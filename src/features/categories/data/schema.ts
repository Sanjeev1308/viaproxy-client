import { z } from 'zod';

const categorySchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  categoryType: z.enum(['service', 'product']),
  isSubcategory: z.boolean().optional(),
});
export type Categories = z.infer<typeof categorySchema>;

export const categoriesListSchema = z.array(categorySchema);

export const filterFields = [
  {
    label: 'Name',
    value: 'name',
    placeholder: 'Search by name...',
  },
  {
    label: 'Is A SubCategory?',
    value: 'isSubcategory',
    options: [
      { value: true, lable: 'Yes' },
      { value: false, lable: 'No' },
    ].map((option) => ({
      label: option.lable,
      value: option.value,
    })),
  },
  {
    label: 'Category Type',
    value: 'categoryType',
    options: [
      { value: 'service', lable: 'Service' },
      { value: 'product', lable: 'Product' },
    ].map((option) => ({
      label: option.lable,
      value: option.value,
    })),
  },
];
