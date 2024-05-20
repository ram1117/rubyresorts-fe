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

const Navbar = () => {
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
        <SheetContent className="z-[999] bg-card text-light-text border-none">
          <SheetHeader className="flex items-center">
            <h2 className="text-lg font-semibold py-4">Hi User</h2>
          </SheetHeader>
          <ul className="flex flex-col gap-6 py-12">
            <SheetClose asChild>
              <Link href="/rooms" className="border-b border-dotted p-2">
                Rooms
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/bookings" className="border-b border-dotted p-2">
                Bookings
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/bookings" className="border-b border-dotted p-2">
                Account
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/auth/signin" className="border-b border-dotted  p-2">
                Sign In
              </Link>
            </SheetClose>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Navbar
