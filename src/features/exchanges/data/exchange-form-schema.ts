import * as z from 'zod';

export const offerFormSchema = z
  .object({
    offerTitle: z
      .string({ required_error: 'Offer title is required.' })
      .max(100, 'Offer title must not exceed 100 characters.'),
    proposedItem: z
      .string({
        required_error: 'Proposed item is required.',
      })
      .describe('What do you propose?')
      .default('service'),
    concernedProductService: z
      .string()
      .max(255, 'Concerned product/service description must not exceed 255 characters.')
      .describe('Products or Services concerned'),
    grantRightToWithdraw: z.enum(['Yes', 'No']).describe('Grant the right of withdrawal').optional(),
    description: z
      .string()
      .nonempty('Description is required.')
      .max(1000, 'Description must not exceed 1000 characters.'),
    offerImage: z.union([z.instanceof(File), z.string()]),
    offerStartDate: z.date({ required_error: 'Offer start date is required.' }).refine((date) => date >= new Date(), {
      message: 'Offer start date must not be in the past.',
    }),
    offerEndDate: z.date({ required_error: 'Offer end date is required.' }).refine((date) => date >= new Date(), {
      message: 'Offer end date must not be in the past.',
    }),
    exchangeType: z
      .enum(['exchange', 'sale', 'donate'], {
        required_error: 'Exchange type is required.',
      })
      .describe('Desired form of exchange'),
    paymentType: z
      .enum(['lump sum', 'per day', 'per hour'], {
        required_error: 'Payment type is required.',
      })
      .describe('Form of payment requested or proposed'),
    estimatedPrice: z
      .number({ required_error: 'Estimated price is required.' })
      .min(0, 'Estimated price must be a positive number.')
      .describe('Estimate of the minimum price requested or offered'),
    paymentMethod: z
      .enum(['delivered', 'hand to hand', 'paid on collection', 'delivered after payment'], {
        required_error: 'Payment method is required.',
      })
      .describe('Type of payment or exchange requested or proposed'),
    geographicArea: z
      .string()
      .nonempty('Geographic area is required.')
      .max(255, 'Geographic area must not exceed 255 characters.'),
    city: z.string().nonempty('City is required.').max(255, 'City must not exceed 255 characters.'),
    campus: z.string().max(255, 'Campus description must not exceed 255 characters.'),
    specialConditionsFile: z.union([z.instanceof(File), z.string()]).optional(),
    deliveryTermsDescription: z
      .string()
      .nonempty('Delivery terms description is required.')
      .max(1000, 'Delivery terms description must not exceed 1000 characters.')
      .describe('Description of the terms of delivery or payment of your offer'),
    //   termsAndConditions: z.string().max(2000, 'Terms and conditions must not exceed 2000 characters.'),
  })
  .refine((data) => !(data.proposedItem === 'product' && !data.grantRightToWithdraw), {
    message: 'Please select the grant permssion',
    path: ['grantRightToWithdraw'],
  });
