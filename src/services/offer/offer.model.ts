export interface IOffer {
  offerTitle: string;
  proposedItem: 'service' | 'product' | 'buy';
  concernedProductService?: string;
  description: string;
  offerImage: string;
  offerStartDate: Date;
  offerEndDate: Date;
  exchangeType: 'exchange' | 'sale' | 'donate';
  paymentType: 'lump sum' | 'per day' | 'per hour';
  estimatedPrice: number;
  paymentMethod: 'delivered' | 'hand to hand' | 'paid on collection' | 'delivered after payment';
  geographicArea: string;
  city: string;
  campus?: string;
  specialConditionsFile?: string;
  deliveryTermsDescription: string;
}
