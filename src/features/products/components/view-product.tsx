import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProductById } from '@/hooks/api/product.rq';
import { useParams } from 'react-router-dom';

const ProductDetailsView = () => {
  const { id: productId } = useParams();
  const { data, isLoading } = useProductById(productId || '');

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const product = data.product;

  return (
    <div className="max-w-3xl">
      <Card className="shadow-sm">
        <CardHeader className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <CardTitle className="text-xl font-semibold">{product?.name}</CardTitle>
            </div>
            <div className="flex space-x-2">
              <Badge variant={product?.isActive ? 'default' : 'secondary'}>
                {product?.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <span className="text-md font-bold">Description</span>
            {product?.description ? (
              <p className="text-gray-600 leading-relaxed">{product?.description}</p>
            ) : (
              <p className="text-gray-400 italic">No description available</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailsView;
