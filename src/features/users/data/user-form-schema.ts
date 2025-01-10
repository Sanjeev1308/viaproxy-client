import { z } from 'zod';

export const usersFormSchema = z
  .object({
    firstName: z
      .string()
      .nonempty('First name is required.')
      .max(100, 'First name must not exceed 100 characters.')
      .describe("User's First Name"),

    lastName: z
      .string()
      .nonempty('Last name is required.')
      .max(100, 'Last name must not exceed 100 characters.')
      .describe("User's Last Name"),

    email: z.string().email('Invalid email address').nonempty('Email is required.').describe("User's Email Address"),

    country: z.string().max(100, 'Country must not exceed 100 characters.').optional().describe("User's Country"),

    city: z.string().max(100, 'City must not exceed 100 characters.').optional().describe("User's City"),

    school: z
      .string()
      .max(255, 'School name must not exceed 255 characters.')
      .optional()
      .describe("User's School or Institution"),

    role: z
      .enum(['admin', 'student', 'eco-citizen', 'merchant'], {
        required_error: 'Role is required.',
      })
      .describe("User's Role"),

    isActive: z.boolean().describe('Is the user account active?'),

    // Optional field to upload a profile picture
    profilePicture: z.union([z.instanceof(File), z.string()]).optional(),
  })
  .refine(
    (data) => {
      // Custom validation to ensure email format and existence of necessary fields
      return data.firstName !== '' && data.lastName !== '' && data.email !== '';
    },
    {
      message: 'First name, last name, and email are required',
      path: ['firstName', 'lastName', 'email'],
    },
  );
