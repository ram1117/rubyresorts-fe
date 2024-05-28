import Link from 'next/link'
import { Button } from '../ui/button'

const RoomSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-4 bg-hotel-bg bg-no-repeat bg-cover text-light-text">
      <div className="px-4 md:px-12 flex flex-col gap-4 md:gap-8">
        <h2 className="uppercase tracking-[0.2rem] text-sm">Accommodations</h2>
        <h2 className="text-4xl md:text-6xl font-medium font-playfair">
          Luxury Redefined in the Mountains
        </h2>
        <p className="w-4/5 md:w-3/5 lg:w-2/5">
          Experience unparalleled elegance and comfort in our luxury rooms at
          the mountain resort. Nestled amidst breathtaking alpine scenery, each
          room offers panoramic views of the majestic peaks and lush valleys.
          Our meticulously designed interiors combine rustic charm with modern
          sophistication, featuring plush king-sized beds, state-of-the-art
          amenities, and private balconies perfect for soaking in the serene
          atmosphere.
        </p>
        <Button
          asChild
          variant={'outline'}
          className="w-max tracking-wider uppercase bg-transparent"
        >
          <Link href="/rooms">View Our Rooms</Link>
        </Button>
      </div>
    </section>
  )
}

export default RoomSection
