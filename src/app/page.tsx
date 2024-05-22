import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-full relative flex flex-col justify-center">
      <section className="mx-4 px-4 xl:ms-20 md:px-12">
        <div className="mb-12 font-playfair">
          <h2 className="tracking-[0.8rem] text-sm md:text-base uppercase mb-4">
            Welcome to the{' '}
          </h2>
          <h1 className="font-radio-canada text-4xl md:text-6xl font-medium ">
            Ruby Resorts
          </h1>
        </div>

        <div className="text-base md:text-xl">
          <h3> Escape to the tropical paradise.</h3>
          <h3> Discover the Ultimate Luxury Resort Experience</h3>
        </div>
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[400px] md:w-11/12 lg:w-2/5">
          <Button
            asChild
            variant={'outline'}
            className="w-full bg-transparent tracking-wider uppercase"
          >
            <Link href="/availability">Check Availability</Link>
          </Button>
          <Button
            asChild
            variant={'outline'}
            className="w-full bg-transparent tracking-wider uppercase"
          >
            <Link href="/rooms">View Our Rooms</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
