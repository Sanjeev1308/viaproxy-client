/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import ExchangeOfferForm from '@/features/exchanges/components/exchange-form';
import { useOfferById, useUpdateOfferById } from '@/hooks/api/offer.rq';
import { objectToFormData } from '@/utils/form-data.utils';
import { useParams } from 'react-router-dom';

export default function EditExchangeOffer() {
  const { id: exchangeId } = useParams();
  const { data, isLoading } = useOfferById(exchangeId || '');
  const { mutateAsync, isLoading: isUpdateExchangeLoading } = useUpdateOfferById();

  const handleSubmit = async (data: any) => {
    const formData = objectToFormData(data);
    await mutateAsync({ id: exchangeId || '', data: formData });
  };

  // Preprocess the data to convert string dates to Date objects
  const preprocessData = (offer: any) => {
    return {
      ...offer,
      offerStartDate: offer.offerStartDate ? new Date(offer.offerStartDate) : null,
      offerEndDate: offer.offerEndDate ? new Date(offer.offerEndDate) : null,
    };
  };

  return (
    <Main fixed>
      <ScrollArea>
        <h1 className="text-2xl font-bold tracking-tight">Edit Exchange Offer</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">EDIT YOUR OFFER</h1>
                <p className="text-sm text-gray-600">
                  Finance your investment or spending projects with your unused assets!
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center space-x-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ) : (
                <ExchangeOfferForm
                  values={data.offer ? preprocessData(data.offer) : undefined}
                  handleOnSubmit={handleSubmit}
                  isLoading={isUpdateExchangeLoading}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
