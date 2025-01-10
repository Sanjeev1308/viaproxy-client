import { z } from 'zod';

const userSchema = z.object({
  _id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
  isActive: z.boolean(),
});
export type Users = z.infer<typeof userSchema>;

export const userListSchema = z.array(userSchema);

export const filterFields = [
  {
    label: 'Email',
    value: 'email',
    placeholder: 'Search by email...',
  },
  {
    label: 'Role',
    value: 'role',
    options: [
      { value: 'student', lable: 'Student' },
      { value: 'eco-citizen', lable: 'Eco citizen' },
      { value: 'merchant', lable: 'Merchant' },
    ].map((option) => ({
      label: option.lable,
      value: option.value,
    })),
  },
  // {
  //   label: 'Active',
  //   value: 'isActive',
  //   options: [
  //     { value: true, lable: 'Yes' },
  //     { value: false, lable: 'No' },
  //   ].map((option) => ({
  //     label: option.lable,
  //     value: option.value,
  //   })),
  // },
];
