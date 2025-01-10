/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import UsersForm from '@/features/users/components/user-form';
import { useUpdateUserById, useUserById } from '@/hooks/api/user.rq';
import { useToast } from '@/hooks/use-toast';
import { objectToFormData } from '@/utils/form-data.utils';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const { id: userId } = useParams();
  const { data, isLoading } = useUserById(userId || '');
  const { mutateAsync, isLoading: isUpdateUserLoading } = useUpdateUserById();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const formData = objectToFormData(data);
      await mutateAsync({ id: userId || '', data: formData });
      navigate('/admin/users');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  // Preprocess the data to convert string dates to Date objects
  // const preprocessData = (offer: any) => {
  //   return {
  //     ...offer,
  //     offerStartDate: offer.offerStartDate ? new Date(offer.offerStartDate) : null,
  //     offerEndDate: offer.offerEndDate ? new Date(offer.offerEndDate) : null,
  //   };
  // };

  return (
    <Main fixed>
      <ScrollArea>
        <h1 className="text-2xl font-bold tracking-tight">Edit User Form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">EDIT USER</h1>
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
                <UsersForm values={data.user} handleOnSubmit={handleSubmit} isLoading={isUpdateUserLoading} />
              )}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
