import ImageWrapper from '@/atoms/ImageWrapper'
import Company from './Company'
import Contact from './Contact'
import Corporate from './Corporate'
import LogoImage from '@public/app_logo.jpeg'

const Footer = () => {
  return (
    <footer className="min-h-[60vh] px-4 md:px-12 bg-light-text flex flex-col justify-center text-dark-text">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2">
          <Contact />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-3 border-t-2 md:border-none">
          <div>
            <Company />
          </div>
          <div>
            <Corporate />
          </div>
          <div className="hidden lg:block">
            <ImageWrapper
              src={LogoImage}
              alt="Resort Logo"
              containerStyle="w-4/5 aspect-square"
              sizes="25vw"
            ></ImageWrapper>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
