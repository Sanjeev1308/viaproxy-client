import { z } from 'zod';

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('inactive'),
  z.literal('invited'),
  z.literal('suspended'),
]);
export type UserStatus = z.infer<typeof userStatusSchema>;

const userRoleSchema = z.union([
  z.literal('superadmin'),
  z.literal('admin'),
  z.literal('cashier'),
  z.literal('manager'),
]);
export type UserRole = z.infer<typeof userRoleSchema>;

const exchangeSchema = z.object({
  _id: z.string(),
  offerImage: z.string(),
  offerTitle: z.string(),
  proposedItem: z.string(),
  concernedProductService: z.string(),
  geographicArea: z.string(),
  offerStartDate: z.string(),
  offerEndDate: z.string(),
});
export type Exchanges = z.infer<typeof exchangeSchema>;

export const exchangeListSchema = z.array(exchangeSchema);

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
      // withCount: true,
    })),
  },
];
