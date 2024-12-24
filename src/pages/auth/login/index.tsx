/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLogin } from '@/hooks/api/auth.rq';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

const formSchema = z.object({
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
});

export function Login() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useLogin();

  const handleSubmit = async (data: any) => {
    await mutateAsync(data);
    navigate('/');
  };

  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login Account to continue to app.</CardDescription>
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
              }}
            >
              <AutoFormSubmit className="w-full" disabled={isLoading}>
                Login
              </AutoFormSubmit>
            </AutoForm>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
