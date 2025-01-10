import { z } from 'zod';

const adsSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  serviceType: z.enum(['service', 'product']),
  concernedProductService: z.string(),
  adsStartDate: z.string(),
  adsEndDate: z.string(),
  geographicArea: z.string(),
});
export type Ads = z.infer<typeof adsSchema>;

export const adsListSchema = z.array(adsSchema);

export const filterFields = [
  {
    label: 'Name',
    value: 'name',
    placeholder: 'Search by name...',
  },
];
