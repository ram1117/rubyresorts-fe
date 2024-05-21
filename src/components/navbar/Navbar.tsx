import Link from 'next/link'
import ImageWrapper from '@/atoms/ImageWrapper'
import MenuIcon from '@public/icons/menu.png'
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '../ui/sheet'
import { getCookies } from '@/lib/cookies'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { urlUserInfo } from '@/lib/apilinks'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

const Navbar = async () => {
  let userInfo: any
  const apiResponse = await makeApiRequest(
    API_METHODS.GET,
    urlUserInfo(),
    null,
    await getCookies()
  )
  if (apiResponse.status === 401) userInfo = undefined
  else userInfo = await apiResponse.json()

  const isLoggedIn = !!userInfo

  return (
    <nav className="fixed inset-x-0 text-light-text z-[998] flex justify-between items-center px-4 lg:px-12 py-2">
      <Link href="/">
        <div className="flex flex-col items-center justify-center gap-0">
          <h2 className="tracking-[.1em] leading-4 text-lg font-bold uppercase">
            Ruby
          </h2>
          <h3 className="tracking-tighter text-xs">Resorts</h3>
        </div>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button className="">
            <ImageWrapper
              src={MenuIcon}
              alt={'menu icon'}
              containerStyle="h-8 w-8 md:h-12 md:w-12"
              sizes="10vw"
            ></ImageWrapper>
          </button>
        </SheetTrigger>
        <SheetContent className="z-[999] bg-card text-light-text border-none overflow-auto">
          <SheetHeader className="flex items-center">
            <h2 className="text-lg font-light py-4">
              Hi{' '}
              <span className="font-semibold mx-2">
                {userInfo ? userInfo.fullname : 'There'}
              </span>
            </h2>
          </SheetHeader>
          <ul className="flex flex-col gap-6 py-12">
            <li className="border-b border-dotted p-2">
              <SheetClose asChild>
                <Link href="/rooms">Rooms</Link>
              </SheetClose>
            </li>

            <li className="border-b border-dotted p-2">
              <SheetClose asChild>
                <Link href="/availability">Availability</Link>
              </SheetClose>
            </li>

            <li className="border-b border-dotted p-2">
              <SheetClose asChild>
                <Link href="/about">About Us</Link>
              </SheetClose>
            </li>

            {isLoggedIn && (
              <>
                <li className="border-b border-dotted p-2">
                  <SheetClose asChild>
                    <Link href="/bookings">Reservations</Link>
                  </SheetClose>
                </li>

                <li className="border-b border-dotted p-2">
                  <SheetClose asChild>
                    <Link href="/bookings">Account</Link>
                  </SheetClose>
                </li>
                <li className="p-2 flex justify-center items-center my-6">
                  <SheetClose asChild>
                    <SignOutButton />
                  </SheetClose>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li className="p-2 flex justify-center items-center my-6">
                <SheetClose asChild>
                  <SignInButton />
                </SheetClose>
              </li>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Navbar
