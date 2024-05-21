'use server'

import { ForgotFormStateType } from '@/components/auth/ForgotForm'
import { urlForgot } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'

import z from 'zod'

const validationSchema = z.object({
  email: z.string().email(),
})

const ForgotAction = async (
  formState: ForgotFormStateType,
  formData: FormData
): Promise<ForgotFormStateType> => {
  const validate = validationSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validate.success)
    return { success: false, errors: validate.error.flatten().fieldErrors }

  const response = await makeApiRequest(
    API_METHODS.POST,
    urlForgot(),
    validate.data
  )

  try {
    const responseData = await response.json()
    if (!response.ok) {
      return { success: false, errors: { _form: [responseData.error] } }
    }
  } catch (error) {
    if (error instanceof Error)
      return { success: false, errors: { _form: [error.message] } }
    else return { success: false, errors: { _form: ['Something went wrong.'] } }
  }

  return { success: true, errors: {} }
}

export default ForgotAction
