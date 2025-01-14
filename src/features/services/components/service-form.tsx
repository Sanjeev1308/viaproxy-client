/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import CategoryDropdown from '@/features/dropdowns/components/category-dropdown';
import SubCategoryDropdown from '@/features/dropdowns/components/sub-category-dropdown';
import { useState } from 'react';
import { serviceFormSchema } from '../data/service-form-schema';

export default function ServiceForm({ values, handleOnSubmit, isLoading }: any) {
  const [serviceCategoryId, setServiceCategoryId] = useState('');

  const handleChange = (value: any) => {
    setServiceCategoryId(value.serviceCategoryId);
  };

  return (
    <AutoForm
      formSchema={serviceFormSchema}
      values={values}
      onValuesChange={handleChange}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        image: { fieldType: 'file' },
        description: { fieldType: 'textarea' },
        serviceCategoryId: {
          renderParent({ children }: any) {
            return <CategoryDropdown categoryType="service" {...children.props} />;
          },
        },
        serviceSubCategoryId: {
          renderParent({ children }: any) {
            if (!serviceCategoryId) {
              return null;
            }
            return <SubCategoryDropdown productCategoryId={serviceCategoryId} {...children.props} />;
          },
        },
      }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
