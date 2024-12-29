/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRegister } from '@/hooks/api/auth.rq';
import { useToast } from '@/hooks/use-toast';
import { useMemo, useState } from 'react';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import * as z from 'zod';

// Function to generate form schema based on the role
const generateFormSchema = (role: string) => {
  const baseSchema = z.object({
    firstName: z.string().nonempty('First name is required.'),
    lastName: z.string().nonempty('Last name is required.'),
    email: z.string().email('Invalid email address.').nonempty('Email is required.'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters.' })
      .nonempty('Password is required.'),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm Password must be at least 8 characters.' })
      .nonempty('Confirm Password is required.'),
  });

  // Specific fields based on role
  const specificFields =
    role === 'student'
      ? z.object({
          country: z.string(),
          category: z.string(),
          school: z.string(),
        })
      : role === 'eco-citizen'
        ? z.object({
            country: z.string(),
            city: z.string(),
          })
        : z.object({
            country: z.string(),
            city: z.string(),
          });

  // Merge the base schema with specific fields
  return baseSchema.merge(specificFields).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });
};

const roleOptions = [
  { value: 'student', label: 'Student' },
  { value: 'eco-citizen', label: 'Eco-Citizen' },
  { value: 'merchant', label: 'Merchant' },
];

export function Register() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useRegister();
  const [currentRole, setCurrentRole] = useState('student');
  const { toast } = useToast();

  // Use useMemo to avoid recalculating form schema on every render
  const currentFormSchema = useMemo(() => generateFormSchema(currentRole), [currentRole]);

  const handleSubmit = async (data: any) => {
    try {
      await mutateAsync({ ...data, role: currentRole });
      navigate({
        pathname: '/auth/verify-email',
        search: createSearchParams({ email: data.email }).toString(),
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: error.name,
        description: error.message,
      });
    }
  };

  return (
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
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your email and password to create an account.</p>
          </div>

          <div className="py-2">
            <RadioGroup value={currentRole} onValueChange={setCurrentRole} className="grid grid-cols-3 gap-4">
              {roleOptions.map((item) => (
                <div key={item.value}>
                  <RadioGroupItem value={item.value} id={item.value} className="peer sr-only" aria-label={item.label} />
                  <Label
                    htmlFor={item.value}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <AutoForm
            formSchema={currentFormSchema}
            onSubmit={handleSubmit}
            fieldConfig={{
              password: { inputProps: { type: 'password', placeholder: '••••••••' } },
              confirmPassword: { inputProps: { type: 'password', placeholder: '••••••••' } },
              firstName: { inputProps: { className: 'w-[48%]' } },
              lastName: { inputProps: { className: 'w-[48%]' } },
            }}
          >
            <AutoFormSubmit className="w-full" disabled={isLoading}>
              Register
            </AutoFormSubmit>
          </AutoForm>

          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to="/auth/login" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
