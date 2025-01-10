/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { categoryFormSchema } from '../data/category-form-schema';

export default function CategoryForm({ values, handleOnSubmit, isLoading }: any) {
  return (
    <AutoForm
      formSchema={categoryFormSchema}
      values={values}
      onSubmit={handleOnSubmit}
      fieldConfig={{ description: { fieldType: 'textarea' } }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
