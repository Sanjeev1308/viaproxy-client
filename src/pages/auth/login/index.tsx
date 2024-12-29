/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { useLogin } from '@/hooks/api/auth.rq';
import { useToast } from '@/hooks/use-toast';
import { useActions } from '@/hooks/useActions';
import { Link, useNavigate } from 'react-router-dom';
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
      message: 'Password must be at least 8 characters.',
    }),
});

export function Login() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useLogin();
  const { login: loginAction } = useActions();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    try {
      const result = await mutateAsync(data);

      loginAction({
        accessToken: result.accessToken,
      });

      navigate(`/${result.role}/dashboard`);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  return (
    <>
      <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-indigo-950" />
          <div className="relative z-20 flex items-center text-lg font-medium">ViaProxy</div>

          <img
            src="https://dev.viaproxy.eu/admin/assets/images/logo/login.png"
            className="relative m-auto"
            width={301}
            height={60}
            alt="Vite"
          />

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">Discover how you can exchange products and services seamlessly with Viaproxy.</p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-left">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below <br />
                to log into your account
              </p>
            </div>

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
              <div className="text-end">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm font-medium text-muted-foreground hover:opacity-75 text-end"
                >
                  Forgot password?
                </Link>
              </div>
              <AutoFormSubmit className="w-full" disabled={isLoading}>
                Login
              </AutoFormSubmit>
            </AutoForm>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/auth/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
