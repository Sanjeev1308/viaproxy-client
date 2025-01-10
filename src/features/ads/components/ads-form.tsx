/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { adsFormSchema } from '../data/ads-form-schema';

export default function AdsForm({ values, handleOnSubmit, isLoading }: any) {
  return (
    <AutoForm
      formSchema={adsFormSchema}
      values={values}
      onSubmit={handleOnSubmit}
      fieldConfig={{ description: { fieldType: 'textarea' } }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
