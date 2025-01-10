/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import AutoFormCustomSelect from '@/components/auto-form/fields/custom-select';
import { useAllCategory } from '@/hooks/api/category.rq';
import { useMemo } from 'react';
import { productFormSchema } from '../data/product-form-schema';

export default function ProductForm({ values, handleOnSubmit, isLoading }: any) {
  const { data } = useAllCategory({ page: 1, limit: 10, filter: { categoryType: 'product' } });

  const options = useMemo(() => {
    return data?.data.map((item: any) => ({ value: item._id, label: item.name }));
  }, [data]);

  return (
    <AutoForm
      formSchema={productFormSchema}
      values={values}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        description: { fieldType: 'textarea' },
        productCategoryId: {
          renderParent({ children }: any) {
            return <AutoFormCustomSelect selectOptions={options} {...children.props} />;
          },
        },
      }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
