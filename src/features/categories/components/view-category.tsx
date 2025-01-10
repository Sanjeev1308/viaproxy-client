import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCategoryById } from '@/hooks/api/category.rq';
import { useParams } from 'react-router-dom';

const CategoryDetailsView = () => {
  const { id: categoryId } = useParams();
  const { data, isLoading } = useCategoryById(categoryId || '');

  if (isLoading) {
    return <div className="text-center py-12 text-gray-600">Loading...</div>;
  }

  const category = data.category;

  return (
    <div className="max-w-3xl">
      <Card className="shadow-sm">
        <CardHeader className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <CardTitle className="text-xl font-semibold">{category?.name}</CardTitle>
            </div>
            <div className="flex space-x-2">
              <Badge variant="outline" className="capitalize bg-green-100">
                {category?.categoryType || 'Uncategorized'}
              </Badge>
              <Badge variant={category?.isActive ? 'default' : 'secondary'}>
                {category?.isActive ? 'Active' : 'Inactive'}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <span className="text-md font-bold">Description</span>
            {category?.description ? (
              <p className="text-gray-600 leading-relaxed">{category?.description}</p>
            ) : (
              <p className="text-gray-400 italic">No description available</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryDetailsView;
