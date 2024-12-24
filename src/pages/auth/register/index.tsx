/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRegister } from '@/hooks/api/auth.rq';
import { createSearchParams, useNavigate } from 'react-router-dom';
import * as z from 'zod';

enum Role {
  Student = 'Student',
  EcoCitizen = 'Eco-Citizen',
}

const formSchema = z.object({
  firstName: z.string({
    required_error: 'First name is required.',
  }),
  lastName: z.string({
    required_error: 'Last name is required.',
  }),
  email: z.string({
    required_error: 'Email is required.',
  }),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(8, {
      message: 'Password must be at least 6 characters.',
    }),

  role: z.nativeEnum(Role),
});

export function Register() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useRegister();

  const handleSubmit = async (data: any) => {
    await mutateAsync(data);
    navigate({
      pathname: '/auth/verify-email',
      search: createSearchParams({
        email: data.email,
      }).toString(),
    });
  };

  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create Account to continue to app.</CardDescription>
          </CardHeader>

          <CardContent>
            <AutoForm
              formSchema={formSchema}
              onSubmit={handleSubmit}
              fieldConfig={{
                password: {
                  inputProps: {
                    type: 'password',
                    placeholder: '••••••••',
                  },
                },
                firstName: {
                  inputProps: {
                    className: 'w-[48%]',
                  },
                },
                lastName: {
                  inputProps: {
                    className: 'w-[48%]',
                  },
                },
              }}
            >
              <AutoFormSubmit className="w-full" disabled={isLoading}>
                Register
              </AutoFormSubmit>
            </AutoForm>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
