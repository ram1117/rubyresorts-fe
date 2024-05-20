'use server'

import { SignupFormStateType } from '@/components/auth/SignUpForm'
import { urlSignup } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apis'
import z from 'zod'

const validationSchema = z
  .object({
    fullname: z
      .string()
      .min(6, { message: 'Should be at least 6 characters' })
      .regex(/^[A-Za-z\s]+$/, {
        message: 'Only alphabets and spaces allowed',
      }),
    email: z.string().email('Please enter a valid E-mail'),
    username: z
      .string()
      .min(8, { message: 'Should be at least 8 characters' })
      .regex(/^\S+$/, { message: 'Should not have white spaces' }),

    password: z
      .string()
      .min(8, { message: 'Should be at least 8 characters long' })
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message:
          'Should contain at least one capital, one small letter, one special character and one number',
      }),
    password2: z
      .string()
      .min(8, { message: 'Should be at least 8 characters long' }),

    mobile: z
      .string()
      .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
        message: 'Invalid mobile number',
      }),
  })
  .refine((schema) => schema.password === schema.password2, {
    message: `Passwords don't match`,
    path: ['password2'],
  })

const SignupAction = async (
  formState: SignupFormStateType,
  formData: FormData
): Promise<SignupFormStateType> => {
  const validate = validationSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validate.success) return { errors: validate.error.flatten().fieldErrors }

  try {
    const response = await makeApiRequest(
      API_METHODS.POST,
      urlSignup(),
      validate.data
    )

    if (!response.ok) {
      const error = await response.json()
      return {
        errors: { _form: [`${error.message}. Code:${error.statusCode} `] },
      }
    }
  } catch (error) {
    if (error instanceof Error) return { errors: { _form: [error.message] } }
    return { errors: { _form: ['Something went wrong'] } }
  }

  return { success: true, errors: { _form: [] } }
}

export default SignupAction
