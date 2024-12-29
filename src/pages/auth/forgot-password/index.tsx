/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Card } from '@/components/ui/card';
import AuthLayout from '@/features/auth/components/auth-layout';
import { useForgotPassword } from '@/hooks/api/auth.rq';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email('Invalid email address.').nonempty('Email is required.'),
});

export default function ForgotPassword() {
  const { mutateAsync, isLoading } = useForgotPassword();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      await mutateAsync(data);
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
          <h1 className="text-md font-semibold tracking-tight">Forgot Password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your registered email and <br /> we will send you a link to reset your password.
          </p>
        </div>
        <AutoForm formSchema={formSchema} onSubmit={handleSubmit}>
          <AutoFormSubmit className="w-full" disabled={isLoading}>
            Send Link
          </AutoFormSubmit>
        </AutoForm>
        <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/auth/register" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
          .
        </p>
      </Card>
    </AuthLayout>
  );
}
