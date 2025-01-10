import * as z from 'zod';

export const adsFormSchema = z.object({
  name: z.string({ required_error: 'Ads Name required' }),
  description: z.string().optional(),
  serviceType: z.enum(['service', 'product']).default('service'),
  concernedProductService: z.string(),
  adsStartDate: z.date({ required_error: 'Start date is required.' }).refine((date) => date >= new Date(), {
    message: 'Start date must not be in the past.',
  }),
  adsEndDate: z.date({ required_error: 'End date is required.' }).refine((date) => date >= new Date(), {
    message: 'End date must not be in the past.',
  }),
  geographicArea: z.string().optional(),
});
