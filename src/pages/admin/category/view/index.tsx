import { Main } from '@/components/layout/main';
import CategoryDetailsView from '@/features/categories/components/view-category';

const CategoryView = () => {
  return (
    <Main>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Category Details</h2>

        <CategoryDetailsView />
      </div>
    </Main>
  );
};

export default CategoryView;
