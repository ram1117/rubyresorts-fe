import { cookies } from 'next/headers'

export const getCookies = () => {
  const auth = cookies().get('Authentication')
  const refresh = cookies().get('Refresh')

  return [`${auth?.name}=${auth?.value}`, `${refresh?.name}=${refresh?.value}`]
}
