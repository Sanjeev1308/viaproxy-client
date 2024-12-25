/* eslint-disable @typescript-eslint/no-explicit-any */
import AutoForm, { AutoFormSubmit } from '@/components/auto-form';
import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLogin } from '@/hooks/api/auth.rq';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

enum Sports {
  Football = 'Football/Soccer',
  Basketball = 'Basketball',
  Baseball = 'Baseball',
  Hockey = 'Hockey (Ice)',
  None = "I don't like sports",
}

const formSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required.',
    })
    .min(2, {
      message: 'Username must be at least 2 characters.',
    }),

  password: z
    .string({
      required_error: 'Password is required.',
    })
    .describe('Your secure password')
    .min(8, {
      message: 'Password must be at least 8 characters.',
    }),

  favouriteNumber: z.coerce
    .number({
      invalid_type_error: 'Favourite number must be a number.',
    })
    .min(1, {
      message: 'Favourite number must be at least 1.',
    })
    .max(10, {
      message: 'Favourite number must be at most 10.',
    })
    .default(1)
    .optional(),

  acceptTerms: z
    .boolean()
    .describe('Accept terms and conditions.')
    .refine((value) => value, {
      message: 'You must accept the terms and conditions.',
      path: ['acceptTerms'],
    }),

  sendMeMails: z.boolean().optional(),

  birthday: z.coerce.date().optional(),

  color: z.enum(['red', 'green', 'blue']).optional(),

  // Another enum example
  marshmallows: z.enum(['not many', 'a few', 'a lot', 'too many']).describe('How many marshmallows fit in your mouth?'),

  // Native enum example
  sports: z.nativeEnum(Sports).describe('What is your favourite sport?'),

  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    })
    .optional(),

  customParent: z.string().optional(),

  file: z.string().optional().describe('Text file'),
});

export function NewExchange() {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useLogin();

  const handleSubmit = async (data: any) => {
    await mutateAsync(data);
    navigate('/');
  };

  return (
    <>
      <Header>
        {/* <Search /> */}
        <div className="ml-auto flex items-center space-x-4">
          {/* <ThemeSwitch /> */}
          <ProfileDropdown />
        </div>
      </Header>

      <Main fixed>
        <ScrollArea className="h-full overflow-auto">
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
                  favouriteNumber: {
                    description: 'Your favourite number between 1 and 10.',
                  },
                  acceptTerms: {
                    inputProps: {
                      required: true,
                    },
                    description: (
                      <>
                        I agree to the{' '}
                        <button
                          className="text-primary underline"
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Terms and conditions clicked.');
                          }}
                        >
                          terms and conditions
                        </button>
                        .
                      </>
                    ),
                  },

                  birthday: {
                    description: 'We need your birthday to send you a gift.',
                  },

                  sendMeMails: {
                    fieldType: 'switch',
                  },

                  bio: {
                    fieldType: 'textarea',
                  },

                  marshmallows: {
                    fieldType: 'radio',
                  },

                  customParent: {
                    renderParent: ({ children }) => (
                      <div className="flex items-end gap-3">
                        <div className="flex-1">{children}</div>
                        <div>
                          <Button type="button">Check</Button>
                        </div>
                      </div>
                    ),
                  },

                  file: {
                    fieldType: 'file',
                  },
                }}
              >
                <AutoFormSubmit className="w-full" disabled={isLoading}>
                  Login
                </AutoFormSubmit>
              </AutoForm>
            </CardContent>
          </Card>
        </ScrollArea>
      </Main>
    </>
  );
}
