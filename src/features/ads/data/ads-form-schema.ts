import * as z from 'zod';

export const adsFormSchema = z.object({
  name: z.string({ required_error: 'Ads Name required' }).describe('Campaign Name'),
  serviceType: z.enum(['service', 'product']).default('service').describe('What do you propose?'),
  concernedProductService: z.string().describe('Products or Services concerned'),
  adsStartDate: z.date({ required_error: 'Start date is required.' }).refine((date) => date >= new Date(), {
    message: 'Start date must not be in the past.',
  }),
  adsEndDate: z.date({ required_error: 'End date is required.' }).refine((date) => date >= new Date(), {
    message: 'End date must not be in the past.',
  }),
  description: z.string().optional(),
  category: z
    .enum(['student', 'consumer', 'professional service provider', 'neighboring provider', 'everyone'])
    .describe('Advertising Category')
    .default('student'),
  zone1: z.boolean().optional().describe('Zone 1 (*image 1920x300)'),
  zone1Image: z.union([z.instanceof(File), z.string()]).optional(),
  zone2: z.boolean().optional().describe('Zone 2 (*image 300x300)'),
  zone2Image: z.union([z.instanceof(File), z.string()]).optional(),
  zone3: z.boolean().optional().describe('Zone 3 (*image 300x300)'),
  zone3Image: z.union([z.instanceof(File), z.string()]).optional(),
  country: z.string().optional(),
  city: z.string().optional(),
});
