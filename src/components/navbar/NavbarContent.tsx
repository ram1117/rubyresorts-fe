'use client'

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

import SignOutButton from './SignOutButton'
import useHasScrolled from '@/lib/hooks/useHasScrolled'

interface NavbarContentProps {
  isLoggedIn: boolean
  userInfo: any
}

const NavbarContent = ({ isLoggedIn, userInfo }: NavbarContentProps) => {
  const { scrolled } = useHasScrolled()

  const background = scrolled ? 'bg-section-light' : 'backdrop-blur-md'

  return (
    <nav
      className={`${background} fixed top-0 inset-x-0 text-dark-text z-[998] flex justify-between items-center px-4 lg:px-12 py-2`}
    >
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
        <SheetContent className="z-[999] text-dark-text border-none overflow-auto">
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
                    <Link href="/reservations">Reservations</Link>
                  </SheetClose>
                </li>

                <li className="border-b border-dotted p-2">
                  <SheetClose asChild>
                    <Link href="/account">Account</Link>
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
                  <Link
                    href="/auth/signin"
                    className="border border-card py-2 px-6 rounded-lg hover:bg-slate-200"
                  >
                    Sign In
                  </Link>
                </SheetClose>
              </li>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default NavbarContent
