/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import ServiceForm from '@/features/services/components/service-form';
import { useServiceById, useUpdateServiceById } from '@/hooks/api/service.rq';
import { useToast } from '@/hooks/use-toast';
import { objectToFormData } from '@/utils/form-data.utils';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditService() {
  const { id: serviceId } = useParams();
  const { data, isLoading } = useServiceById(serviceId || '');
  const { mutateAsync, isLoading: isUpdateExchangeLoading } = useUpdateServiceById();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const formData = objectToFormData(data);
      await mutateAsync({ id: serviceId || '', data: formData });
      navigate('/admin/services');
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
        <h1 className="text-2xl font-bold tracking-tight">Edit Service Form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">EDIT YOUR SERVICE</h1>
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
                <ServiceForm values={data.service} handleOnSubmit={handleSubmit} isLoading={isUpdateExchangeLoading} />
              )}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
