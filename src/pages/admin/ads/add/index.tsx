/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import AdsForm from '@/features/ads/components/ads-form';
import { useCreateAds } from '@/hooks/api/ads.rq';
import { useToast } from '@/hooks/use-toast';
import { objectToFormData } from '@/utils/form-data.utils';
import { useNavigate } from 'react-router-dom';

export default function AddAds() {
  const { mutateAsync, isLoading } = useCreateAds();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const formData = objectToFormData(data);
      await mutateAsync(formData);
      navigate('/admin/ads');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  return (
    <Main fixed>
      <ScrollArea>
        <h1 className="text-2xl font-bold tracking-tight">Add Ads Form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">ADD YOUR ADS</h1>
                <p className="text-sm text-gray-600">
                  This section allows you to integrate banners, advertisements, news and other communications on the
                  page of registered traders, artisans and residents.
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AdsForm handleOnSubmit={handleSubmit} isLoading={isLoading} />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
