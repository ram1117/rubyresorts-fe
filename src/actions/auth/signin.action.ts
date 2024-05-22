'use server'
import { SinginFormStateType } from '@/components/auth/SignInForm'
import { urlSignin } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import { redirect } from 'next/navigation'
import z from 'zod'

const validationSchema = z.object({
  username: z.string().min(8, { message: 'Should be at least 8 characters' }),
  password: z.string().min(1, { message: 'Password required' }),
})

const SigninAction = async (
  formState: SinginFormStateType,
  formData: FormData
): Promise<SinginFormStateType> => {
  const validate = validationSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validate.success) {
    return { errors: validate.error.flatten().fieldErrors }
  }

  try {
    const response = await makeApiRequest(
      API_METHODS.POST,
      urlSignin(),
      validate.data
    )

    const responseData = await response?.json()

    if (!response?.ok) {
      return { errors: { _form: [`${responseData.message}`] } }
    }

    cookies().set('Authentication', responseData.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      expires: new Date(jwtDecode(responseData.access).exp! * 1000),
    })

    cookies().set('Refresh', responseData.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      expires: new Date(jwtDecode(responseData.refresh).exp! * 1000),
    })

    cookies().set('Role', responseData.role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      expires: new Date(jwtDecode(responseData.refresh).exp! * 1000),
    })
  } catch (error) {
    if (error instanceof Error) return { errors: { _form: [error.message] } }
    return { errors: { _form: ['Something went wrong.'] } }
  }

  redirect('/')
}

export default SigninAction
