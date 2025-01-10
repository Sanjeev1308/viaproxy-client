/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ServiceForm from '@/features/services/components/service-form';
import { useCreateService } from '@/hooks/api/service.rq';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export default function AddService() {
  const { mutateAsync, isLoading } = useCreateService();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      // const formData = objectToFormData(data);
      await mutateAsync(data);
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
        <h1 className="text-2xl font-bold tracking-tight">Add Service Form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">ADD YOUR SERVICE</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ServiceForm handleOnSubmit={handleSubmit} isLoading={isLoading} />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
