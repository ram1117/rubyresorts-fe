'use server'

import { OtpFormStateType } from '@/components/auth/OtpForm'
import { urlSubmitOtp } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import z from 'zod'

const validationSchema = z.object({
  otp: z.string().length(6, { message: 'Enter complete OTP' }),
})

const OtpSubmitAction = async (
  email: string,
  formState: OtpFormStateType,
  formData: FormData
): Promise<OtpFormStateType> => {
  const validate = validationSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validate.success) {
    return { errors: validate.error.flatten().fieldErrors }
  }

  try {
    const response = await makeApiRequest(API_METHODS.POST, urlSubmitOtp(), {
      email,
      otp: validate.data.otp,
    })

    const responseData = await response?.json()

    if (!response?.ok) {
      return { errors: { _form: [responseData.message] } }
    }

    cookies().set('Authentication', responseData.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
      expires: new Date(jwtDecode(responseData.access).exp! * 1000),
    })
  } catch (error) {
    if (error instanceof Error) return { errors: { _form: [error.message] } }

    return { errors: { _form: ['Something went wrong'] } }
  }

  redirect('/auth/reset')
}

export default OtpSubmitAction
