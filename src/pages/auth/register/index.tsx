/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/features/landing-page/components/footer';
import Header from '@/features/landing-page/components/header';
import ServicesGrid from '@/features/landing-page/components/register-middle';
import { useRegister } from '@/hooks/api/auth.rq';
import { useToast } from '@/hooks/use-toast';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useMemo, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
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
          status: z.enum([
            'Etudiant',
            'Professeur',
            'Membre du personnel',
            'Coordinateur',
            'Directeur',
            'Recteur-DG ou DP',
          ]),
          country: z.enum(['Belgique', 'France', 'Luxembourg', 'Roumanie', 'Suisse', 'Ukraine', 'Autre']),
          categorySchool: z.string(),
          designationSchool: z.string(),
          implementation: z.enum(['Cousins path', 'Letellier Boulevard', 'bamboo street 50 1080 uccle']),
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
  const [isInterseted, setIsInterseted] = useState(false);
  const { toast } = useToast();
  const queryParams = useQueryParams();

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

  if (!Object.keys(queryParams).length) {
    return <ServicesGrid />;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 max-w-2xl mx-auto p-6 space-y-8">
        <div className="">
          <div className="text-center flex flex-col gap-2">
            <div>
              <h1 className="text-4xl font-bold">How does it work?</h1>
            </div>

            <div>
              <h2 className="text-xl font-bold">Join the Campus Ambassadors Club</h2>
              <p className="text-md text-gray-600 mt-2">Register on the site and take advantage of the good deals!</p>
            </div>

            <div>
              <h2 className="text-xl font-bold">Save smart by making the most of your surpluses</h2>
              <p className="text-md text-gray-600 mt-2">Trade-Sell your products & services</p>
            </div>

            <div>
              <h2 className="text-xl font-bold">Choose the opportunity and carry out your projects</h2>
              <p className="text-md text-gray-600 mt-2">Strengthen your network, because your talents are valuable.</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-2">
            <Button variant="outline" onClick={() => setIsInterseted(false)}>
              No thanks
            </Button>
            <Button onClick={() => setIsInterseted(true)}>Interested</Button>
          </div>
        </div>

        {isInterseted && (
          <Card>
            <CardHeader>
              <CardTitle>Create Student account</CardTitle>
            </CardHeader>

            <CardContent>
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
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </>
  );
}
