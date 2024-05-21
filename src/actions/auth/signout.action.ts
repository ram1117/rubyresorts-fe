'use server'

import { urlSignout } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SignoutAction = async () => {
  console.log('signin out')

  const response = await makeApiRequest(
    API_METHODS.POST,
    urlSignout(),
    {},
    await getCookies()
  )

  if (!response.ok) {
    return 'error signing out'
  }
  cookies().delete('Authentication')
  cookies().delete('Refresh')
  cookies().delete('Role')

  revalidatePath('/')
  redirect('/')
}

export default SignoutAction
