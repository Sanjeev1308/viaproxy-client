import { z } from 'zod';

const serviceSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  isActive: z.boolean(),
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
