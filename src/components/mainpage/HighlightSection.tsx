import SpaImage from '@public/pictures/spa.jpg'
import DiningImage from '@public/pictures/dining.jpg'
import ImageWrapper from '@/atoms/ImageWrapper'

const HighlightSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-section-light py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-dark-text px-4 md:px-12 max-w-[1440px]">
        <div className="flex flex-col gap-4 py-4">
          <h2 className="uppercase tracking-[0.2rem] text-sm">
            Spa & Wellness
          </h2>
          <ImageWrapper
            src={SpaImage}
            alt="spa image"
            containerStyle="w-full aspect-video"
            sizes="(max-width:768px) 90vw,50vw"
          ></ImageWrapper>
          <h2 className="text-xl lg:text-3xl">Spa Montage</h2>
          <p className="font-light">
            Enjoy signature Elements of Wellness treatments, an indoor pool and
            refined amenities at Spa Montage, where nature-inspired experiences
            allow your mind, body and soul to relax in the cradle of Ruby
            Resorts.
          </p>
        </div>
        <div className=" flex flex-col gap-4 py-4">
          <h2 className="uppercase tracking-[0.2rem] text-sm">
            Dining & Drink
          </h2>
          <ImageWrapper
            src={DiningImage}
            alt="restaurant image"
            containerStyle="w-full aspect-video"
            sizes="(max-width:768px) 90vw,50vw"
          ></ImageWrapper>
          <h2 className="text-xl lg:text-3xl">Flavour Pot</h2>
          <p className="font-light">
            Indulge in locally inspired dishes at ourdining outlet, offering
            exquisite wood-fired Italian cuisine, fresh-caught fish and an array
            of delectable small bites that pair perfectly with expansive alpine
            views and handcrafted cocktails.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HighlightSection
