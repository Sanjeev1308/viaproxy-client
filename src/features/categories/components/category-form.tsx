/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import CategoryDropdown from '@/features/dropdowns/components/category-dropdown';
import { useState } from 'react';
import { categoryFormSchema } from '../data/category-form-schema';

export default function CategoryForm({ values, handleOnSubmit, isLoading }: any) {
  const [categoryType, setCategoryType] = useState('service');

  const handleValueChange = (value: any) => {
    setCategoryType(value.categoryType);
  };

  return (
    <AutoForm
      formSchema={categoryFormSchema}
      values={values}
      onValuesChange={handleValueChange}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        description: { fieldType: 'textarea' },
        parentCategoryId: {
          renderParent({ children }: any) {
            return <CategoryDropdown categoryType={categoryType} {...children.props} />;
          },
        },
      }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
