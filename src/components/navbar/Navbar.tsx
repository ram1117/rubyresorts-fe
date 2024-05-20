import Link from 'next/link'
import ImageWrapper from '@/atoms/ImageWrapper'
import MenuIcon from '@public/icons/menu.png'

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 text-light-text z-[99] flex justify-between items-center px-4 lg:px-12 py-8">
      <Link href="/">
        <div className="flex flex-col items-center justify-center gap-0">
          <h2 className="tracking-[.1em] leading-4 text-lg font-bold uppercase">
            Ruby
          </h2>
          <h3 className="tracking-tighter text-xs">Resorts</h3>
        </div>
      </Link>

      <ImageWrapper
        src={MenuIcon}
        alt={'menu icon'}
        containerStyle="h-8 w-8 md:h-12 md:w-12"
      ></ImageWrapper>
      {/* <Link href="/auth/signin">Sign in</Link> */}
    </nav>
  )
}

export default Navbar
