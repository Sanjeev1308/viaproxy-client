/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { DependencyType } from '@/components/auto-form/types';
import { adsFormSchema } from '../data/ads-form-schema';

export default function AdsForm({ values, handleOnSubmit, isLoading }: any) {
  return (
    <AutoForm
      formSchema={adsFormSchema}
      values={values}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        description: { fieldType: 'textarea' },
        adsStartDate: { inputProps: { className: 'w-[48%]' } },
        adsEndDate: { inputProps: { className: 'w-[48%]' } },
        zone1: { fieldType: 'switch' },
        zone1Image: { fieldType: 'file' },
        zone2: { fieldType: 'switch' },
        zone2Image: { fieldType: 'file' },
        zone3: { fieldType: 'switch' },
        zone3Image: { fieldType: 'file' },
      }}
      dependencies={[
        {
          sourceField: 'zone1',
          type: DependencyType.HIDES,
          targetField: 'zone1Image',
          when: (zone1) => !zone1,
        },
        {
          sourceField: 'zone2',
          type: DependencyType.HIDES,
          targetField: 'zone2Image',
          when: (zone2) => !zone2,
        },
        {
          sourceField: 'zone3',
          type: DependencyType.HIDES,
          targetField: 'zone3Image',
          when: (zone2) => !zone2,
        },
      ]}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
