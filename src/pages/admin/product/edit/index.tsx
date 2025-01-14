/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import ProductForm from '@/features/products/components/product-form';
import { useProductById, useUpdateProductById } from '@/hooks/api/product.rq';
import { useToast } from '@/hooks/use-toast';
import { objectToFormData } from '@/utils/form-data.utils';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const { id: productId } = useParams();
  const { data, isLoading } = useProductById(productId || '');
  const { mutateAsync, isLoading: isUpdateProductLoading } = useUpdateProductById();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const formData = objectToFormData(data);
      await mutateAsync({ id: productId || '', data: formData });
      navigate('/admin/products');
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
        <h1 className="text-2xl font-bold tracking-tight">Edit Product form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">EDIT YOUR PRODUCT</h1>
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
                <ProductForm values={data?.product} handleOnSubmit={handleSubmit} isLoading={isUpdateProductLoading} />
              )}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
