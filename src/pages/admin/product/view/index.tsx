import { Main } from '@/components/layout/main';
import ProductDetailsView from '@/features/products/components/view-product';

const ProductView = () => {
  return (
    <Main>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Products Details</h2>

        <ProductDetailsView />
      </div>
    </Main>
  );
};

export default ProductView;
