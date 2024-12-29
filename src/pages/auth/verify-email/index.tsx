/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Card } from '@/components/ui/card';
import AuthLayout from '@/features/auth/components/auth-layout';
import { useVerifyEmail } from '@/hooks/api/auth.rq';
import { useToast } from '@/hooks/use-toast';
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
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      await mutateAsync({ email: searchParams.get('email') || '', otpCode: data.OTPCode });
      navigate('/auth/login');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  return (
    <AuthLayout>
      <Card className="p-6">
        <div className="mb-2 flex flex-col space-y-2 text-left">
          <h1 className="text-md font-semibold tracking-tight">Verify Email</h1>
          <p className="text-sm text-muted-foreground">OTP is sent to your email {searchParams.get('email')}</p>
        </div>

        <AutoForm formSchema={formSchema} onSubmit={handleSubmit}>
          <AutoFormSubmit className="w-full" disabled={isLoading}>
            Verify Email
          </AutoFormSubmit>
        </AutoForm>
      </Card>
    </AuthLayout>
  );
}
