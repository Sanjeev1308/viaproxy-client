/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import CategoryDropdown from '@/features/dropdowns/components/category-dropdown';
import SubCategoryDropdown from '@/features/dropdowns/components/sub-category-dropdown';
import { useState } from 'react';
import { productFormSchema } from '../data/product-form-schema';

export default function ProductForm({ values, handleOnSubmit, isLoading }: any) {
  const [productCategoryId, setProductCategoryId] = useState('');

  const handleChange = (value: any) => {
    setProductCategoryId(value.productCategoryId);
  };

  return (
    <AutoForm
      formSchema={productFormSchema}
      values={values}
      onValuesChange={handleChange}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        image: { fieldType: 'file' },
        description: { fieldType: 'textarea' },
        productCategoryId: {
          renderParent({ children }: any) {
            return <CategoryDropdown categoryType="product" {...children.props} />;
          },
        },
        productSubCategoryId: {
          renderParent({ children }: any) {
            if (!productCategoryId) {
              return null;
            }
            return <SubCategoryDropdown productCategoryId={productCategoryId} {...children.props} />;
          },
        },
      }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
