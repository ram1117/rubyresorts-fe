'use server'

import { UpdatePasswordFormStateType } from '@/components/auth/ResetPasswordForm'
import { urlUpdatePassword } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { cookies } from 'next/headers'
import z from 'zod'

const validationSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Should be at least 8 characters long' })
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message:
          'Should contain at least one capital, one small letter, one special character and one number',
      }),
    password2: z.string(),
  })
  .refine((schema) => schema.password === schema.password2, {
    message: `Passwords don't match`,
    path: ['password2'],
  })

const UpdatePasswordAction = async (
  formState: UpdatePasswordFormStateType,
  formData: FormData
): Promise<UpdatePasswordFormStateType> => {
  const validate = validationSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validate.success) {
    return { errors: validate.error.flatten().fieldErrors }
  }

  try {
    const authCookie = cookies().get('Authentication')
    const response = await makeApiRequest(
      API_METHODS.POST,
      urlUpdatePassword(),
      { password: validate.data.password },
      `${authCookie?.name}=${authCookie?.value}`
    )
    const responseData = await response?.json()
    if (!response?.ok) {
      return { errors: { _form: [responseData.message] } }
    }
  } catch (error) {
    if (error instanceof Error) return { errors: { _form: [error.message] } }
    return { errors: { _form: ['Something went wrong'] } }
  }

  return { success: true, errors: {} }
}

export default UpdatePasswordAction
