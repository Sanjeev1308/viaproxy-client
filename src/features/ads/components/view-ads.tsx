/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdsById } from '@/hooks/api/ads.rq';
import { useParams } from 'react-router-dom';

const DetailRow = ({ label, children }: any) => (
  <div className="space-y-2">
    <span className="text-sm font-medium text-gray-500">{label}</span>
    {children}
  </div>
);

const ImageZone: React.FC<{ label: string; imageUrl?: string }> = ({ label, imageUrl }) => (
  <div className="space-y-2">
    <p className="text-sm font-medium">{label}</p>
    {imageUrl ? (
      <img src="/api/placeholder/300/200" alt={label} className="rounded-lg object-cover w-full h-40" />
    ) : (
      <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center">
        <p className="text-gray-400">No image</p>
      </div>
    )}
  </div>
);

const AdsDetailsView = () => {
  const { id: adsId } = useParams();
  const { data, isLoading } = useAdsById(adsId || '');

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const adsData = data.ads;

  return (
    <div className="max-w-4xl">
      <Card className="shadow-sm">
        <CardHeader className="space-y-4">
          <div className="flex flex-col space-y-2">
            <CardTitle className="text-xl font-semibold">{adsData?.name}</CardTitle>
            <div className="flex space-x-2">
              <Badge variant="outline" className="capitalize">
                {adsData?.serviceType}
              </Badge>
              {adsData?.concernedProductService && (
                <Badge variant="secondary">{adsData?.concernedProductService}</Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <DetailRow label="Description">
            {adsData?.description ? (
              <p className="text-gray-600 leading-relaxed">{adsData?.description}</p>
            ) : (
              <p className="text-gray-400 italic">No description available</p>
            )}
          </DetailRow>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailRow label="Duration">
              <div className="space-y-1">
                <p className="text-sm">Start: {new Date(adsData?.adsStartDate).toDateString()}</p>
                <p className="text-sm">End: {new Date(adsData?.adsEndDate).toDateString()}</p>
              </div>
            </DetailRow>

            <DetailRow label="Location">
              <div className="space-y-1">
                {adsData?.geographicArea && <p className="text-sm">Area: {adsData?.geographicArea}</p>}
                {adsData?.city && <p className="text-sm">City: {adsData?.city}</p>}
              </div>
            </DetailRow>
          </div>

          {adsData?.advertisingAreas && (
            <DetailRow label="Advertising Zones">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {adsData?.advertisingAreas.zone1 && (
                  <ImageZone label="Zone 1" imageUrl={adsData?.advertisingAreas.zone1Image} />
                )}
                {adsData?.advertisingAreas.zone2 && (
                  <ImageZone label="Zone 2" imageUrl={adsData?.advertisingAreas.zone2Image} />
                )}
                {adsData?.advertisingAreas.zone3 && (
                  <ImageZone label="Zone 3" imageUrl={adsData?.advertisingAreas.zone3Image} />
                )}
              </div>
            </DetailRow>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdsDetailsView;
