import { getCookies } from '@/lib/cookies'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { urlUserInfo } from '@/lib/apilinks'
import NavbarContent from './NavbarContent'

const Navbar = async () => {
  let userInfo: any
  const apiResponse = await makeApiRequest(
    API_METHODS.GET,
    urlUserInfo(),
    null,
    await getCookies()
  )
  if (apiResponse?.status === 401) userInfo = undefined
  else userInfo = await apiResponse?.json()

  const isLoggedIn = !!userInfo

  return (
    <>
      <NavbarContent
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
      ></NavbarContent>
    </>
  )
}

export default Navbar
