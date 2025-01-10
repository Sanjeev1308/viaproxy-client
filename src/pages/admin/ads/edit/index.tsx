/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import AdsForm from '@/features/ads/components/ads-form';
import { useAdsById, useUpdateAdsById } from '@/hooks/api/ads.rq';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditAds() {
  const { id: adsId } = useParams();
  const { data, isLoading } = useAdsById(adsId || '');
  const { mutateAsync, isLoading: isAdsCategoryLoading } = useUpdateAdsById();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      // const formData = objectToFormData(data);
      await mutateAsync({ id: adsId || '', data });
      navigate('/admin/ads');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  const preprocessData = (ads: any) => {
    return {
      ...ads,
      adsStartDate: ads.adsStartDate ? new Date(ads.adsStartDate) : null,
      adsEndDate: ads.adsEndDate ? new Date(ads.adsEndDate) : null,
    };
  };

  return (
    <Main fixed>
      <ScrollArea>
        <h1 className="text-2xl font-bold tracking-tight">Edit Ads form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">EDIT YOUR ADS</h1>
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
                <AdsForm
                  values={data?.ads ? preprocessData(data.ads) : undefined}
                  handleOnSubmit={handleSubmit}
                  isLoading={isAdsCategoryLoading}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
