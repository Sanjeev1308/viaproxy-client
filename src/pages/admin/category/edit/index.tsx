/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import CategoryForm from '@/features/categories/components/category-form';
import { useCategoryById, useUpdateCategoryById } from '@/hooks/api/category.rq';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditCategory() {
  const { id: categoryId } = useParams();
  const { data, isLoading } = useCategoryById(categoryId || '');
  const { mutateAsync, isLoading: isUpdateCategoryLoading } = useUpdateCategoryById();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      // const formData = objectToFormData(data);
      await mutateAsync({ id: categoryId || '', data });
      navigate('/admin/categories');
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
        <h1 className="text-2xl font-bold tracking-tight">Edit Category form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">EDIT YOUR CATEGORY</h1>
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
                <CategoryForm
                  values={data?.category}
                  handleOnSubmit={handleSubmit}
                  isLoading={isUpdateCategoryLoading}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
