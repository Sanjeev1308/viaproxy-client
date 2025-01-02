import { z } from 'zod';

const saleSchema = z.object({
  _id: z.string(),
  offerImage: z.string(),
  offerTitle: z.string(),
  proposedItem: z.string(),
  concernedProductService: z.string(),
  geographicArea: z.string(),
  offerStartDate: z.string(),
  offerEndDate: z.string(),
});
export type Sales = z.infer<typeof saleSchema>;

export const saleListSchema = z.array(saleSchema);

export const filterFields = [
  {
    label: 'Title',
    value: 'offerTitle',
    placeholder: 'Search by title...',
  },
  {
    label: 'Proposed Item Type',
    value: 'proposedItem',
    options: [
      { value: 'service', lable: 'Service' },
      { value: 'product', lable: 'Product' },
      { value: 'buy', lable: 'Buy' },
    ].map((option) => ({
      label: option.lable,
      value: option.value,
    })),
  },
];
