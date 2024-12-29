/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ExchangeOfferForm from '@/features/exchanges/components/exchange-form';
import { useCreateOffer } from '@/hooks/api/offer.rq';
import { objectToFormData } from '@/utils/form-data.utils';
import { useNavigate } from 'react-router-dom';

export default function NewExchangeOffer() {
  const { mutateAsync, isLoading } = useCreateOffer();
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    const formData = objectToFormData(data);
    await mutateAsync(formData);
    navigate('/student/exchanges');
  };

  return (
    <Main fixed>
      <ScrollArea>
        <h1 className="text-2xl font-bold tracking-tight">New Exchange Offer</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">SUBMIT YOUR OFFER</h1>
                <p className="text-sm text-gray-600">
                  Finance your investment or spending projects with your unused assets!
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ExchangeOfferForm handleOnSubmit={handleSubmit} isLoading={isLoading} />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
