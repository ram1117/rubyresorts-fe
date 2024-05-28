import DataNotAvailable from '@/atoms/DataNotAvailable'
import ReservationItem from '@/components/reservations/ReservationItem'
import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { urlGetBookings } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'
import Link from 'next/link'

const Page = async () => {
  const response = await makeApiRequest(
    API_METHODS.GET,
    urlGetBookings(),
    {},
    await getCookies()
  )

  if (!response?.ok) {
    return <DataNotAvailable />
  }

  const data = await response.json()
  const hasReservations = data.length > 0

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <h1 className="tracking-wider font-playfair text-xl lg:text-2xl">
        Your Reservations
      </h1>
      {!hasReservations && (
        <div className="w-full flex flex-col mt-20 items-center justify-center gap-8">
          <h2 className="text-xl italic font-light">
            You have no reservations yet
          </h2>
          <Button variant={'outline'} className="rounded-none border-card">
            <Link href="/availability">Check Availability</Link>
          </Button>
        </div>
      )}
      {hasReservations && (
        <Accordion type="single" collapsible className="w-full">
          {data.map((reservation: any) => (
            <ReservationItem
              reservation={reservation}
              key={reservation._id}
            ></ReservationItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}

export default Page
