import ImageWrapper from '@/atoms/ImageWrapper'
import FestivalImage from '@public/pictures/festival.jpg'
import RaftersImage from '@public/pictures/rafters.jpg'
import TownImage from '@public/pictures/town.jpg'

const AttractionSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-4 bg-section-light">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-dark-text px-4 md:px-12 max-w-[1440px]">
        <div className="flex flex-col gap-4 py-4">
          <ImageWrapper
            src={RaftersImage}
            alt="rafters image"
            containerStyle="w-full aspect-square"
            sizes="(max-width:768px) 90vw,50vw"
          ></ImageWrapper>
          <h2 className="text-xl lg:text-2xl font-playfair">
            Radeliers de la Durance
          </h2>
          <p className="font-light">
            Every year, in late May or early June, dive into the past at the
            Radeliers de la Durance. This traditional festival brings an
            ancestral trade back to life. The radeliers brought wood to the
            Mediterranean on rafts, but their metier disappeared at the end of
            the 19th century due to the rise of the railway.
          </p>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <ImageWrapper
            src={TownImage}
            alt="restaurant image"
            containerStyle="w-full aspect-square"
            sizes="(max-width:768px) 90vw,50vw"
          ></ImageWrapper>
          <h2 className="text-xl lg:text-2xl font-playfair">
            Hallstatt Day Trip
          </h2>
          <p className="font-light">
            Discover the picturesque village of Hallstatt, nestled beside a
            serene lake and surrounded by mountains, offering delightful strolls
            through quaint streets, visits to ancient salt mines, and
            breathtaking scenic beauty.
          </p>
        </div>
        <div className=" flex flex-col gap-4 py-4">
          <ImageWrapper
            src={FestivalImage}
            alt="festival image"
            containerStyle="w-full aspect-square"
            sizes="(max-width:768px) 90vw,50vw"
          ></ImageWrapper>
          <h2 className="text-xl lg:text-2xl font-playfair">
            Verbier Festival
          </h2>
          <p className="font-light">
            Every July, the picturesque town of Verbier transforms into a
            cultural hub, hosting classical music performances by world-renowned
            artists in stunning Alpine settings, creating an enchanting fusion
            of nature and art.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AttractionSection
