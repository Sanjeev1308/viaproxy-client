/* eslint-disable @typescript-eslint/no-explicit-any */
import { Main } from '@/components/layout/main';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProductForm from '@/features/products/components/product-form';
import { useCreateProduct } from '@/hooks/api/product.rq';
import { useToast } from '@/hooks/use-toast';
import { objectToFormData } from '@/utils/form-data.utils';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const { mutateAsync, isLoading } = useCreateProduct();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const formData = objectToFormData(data);
      await mutateAsync(formData);
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
        <h1 className="text-2xl font-bold tracking-tight">Add Product Form</h1>

        <div className="my-5">
          <Card>
            <CardHeader>
              <CardTitle className="mt-4">
                <h1 className="text-lg font-medium">ADD YOUR PRODUCT</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProductForm handleOnSubmit={handleSubmit} isLoading={isLoading} />
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </Main>
  );
}
