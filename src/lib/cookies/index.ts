import { cookies } from 'next/headers'
import { urlRefresh } from '../apilinks'
import { API_METHODS } from '../apiservice'

export const getNewAccessToken = async (refreshToken: string) => {
  const apiresponse = await fetch(urlRefresh(), {
    method: API_METHODS.POST,
    body: null,
    headers: {
      'Content-type': 'application/json',
      Cookie: refreshToken,
    },
  })

  const responseData = await apiresponse.json()
  if (!apiresponse.ok) {
    console.error('Unable to get new access token')
  }
  return responseData.token
}

export const getCookies = async () => {
  const auth = cookies().get('Authentication')
  const refresh = cookies().get('Refresh')

  if (refresh) {
    if (auth) {
      return `${auth?.name}=${auth?.value}`
    }

    const newToken = await getNewAccessToken(`${refresh.name}=${refresh.value}`)
    return `Authentication=${newToken}`
  }

  return ``
}

export const isLoggedIn = () => {
  const refresh = cookies().get('Refresh')
  return !!refresh
}
