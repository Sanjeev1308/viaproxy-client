import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useServiceById } from '@/hooks/api/service.rq';
import { useParams } from 'react-router-dom';

const ServiceDetailsView = () => {
  const { id: serviceId } = useParams();
  const { data, isLoading } = useServiceById(serviceId || '');

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const serviceData = data.service;

  return (
    <div className="max-w-3xl">
      <Card className="shadow-sm">
        <CardHeader className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <CardTitle className="text-xl font-semibold">{serviceData?.name}</CardTitle>
            </div>
            <div className="flex space-x-2">
              <Badge variant={serviceData?.isActive ? 'default' : 'secondary'}>
                {serviceData?.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <span className="text-md font-bold">Description</span>
            {serviceData?.description ? (
              <p className="text-gray-600 leading-relaxed">{serviceData?.description}</p>
            ) : (
              <p className="text-gray-400 italic">No description available</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceDetailsView;
