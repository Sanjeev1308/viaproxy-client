/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useVerifyEmail } from '@/hooks/api/auth.rq';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as z from 'zod';

const formSchema = z.object({
  OTPCode: z
    .string({
      required_error: 'OTP Code is required.',
    })
    .min(6, {
      message: 'Password must be at least 6 characters.',
    }),
});

export function VerifyEmail() {
  const { mutateAsync, isLoading } = useVerifyEmail();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    await mutateAsync({ email: searchParams.get('email') || '', OTPCode: data.OTPCode });
    navigate('/auth/login');
  };

  return (
    <>
      <div className="mx-auto my-6 max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle>Verify Email</CardTitle>
            <CardDescription>OTP is sent to your email {searchParams.get('email')}</CardDescription>
          </CardHeader>

          <CardContent>
            <AutoForm formSchema={formSchema} onSubmit={handleSubmit}>
              <AutoFormSubmit className="w-full" disabled={isLoading}>
                Verify Email
              </AutoFormSubmit>
            </AutoForm>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
