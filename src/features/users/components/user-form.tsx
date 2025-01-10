/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { usersFormSchema } from '../data/user-form-schema';

export default function UsersForm({ values, handleOnSubmit, isLoading }: any) {
  return (
    <AutoForm
      formSchema={usersFormSchema}
      values={values}
      onSubmit={handleOnSubmit}
      fieldConfig={{
        firstName: {
          inputProps: { className: 'w-[48%]' },
        },
        lastName: {
          inputProps: { className: 'w-[48%]' },
        },
        email: {
          inputProps: { type: 'email', className: 'w-[48%]' },
        },
        country: {
          inputProps: { className: 'w-[48%]' },
        },
        city: {
          inputProps: { className: 'w-[48%]' },
        },
        school: {
          inputProps: { className: 'w-[48%]' },
        },
        role: {
          fieldType: 'select',
          inputProps: { className: 'w-[48%]' },
        },
        isActive: {
          fieldType: 'checkbox',
        },
        profilePicture: {
          fieldType: 'file',
        },
      }}
    >
      <AutoFormSubmit disabled={isLoading}>Submit</AutoFormSubmit>
    </AutoForm>
  );
}
