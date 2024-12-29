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
  offerTitle: z.string(),
  proposedItem: z.string(),
  concernedProductService: z.string(),
  geographicArea: z.string(),
  offerStartDate: z.string(),
  offerEndDate: z.string(),
});
export type Exchanges = z.infer<typeof exchangeSchema>;

export const exchangeListSchema = z.array(exchangeSchema);
