import DataNotAvailable from '@/atoms/DataNotAvailable'
import Availability from '@/components/availability/Availability'
import { urlGetRooms } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { isLoggedIn } from '@/lib/cookies'

export const revalidate = 3600
const Page = async () => {
  const response = await makeApiRequest(API_METHODS.GET, urlGetRooms())

  if (!response?.ok) {
    return <DataNotAvailable />
  }

  const roomsData = await response?.json()
  const loggedIn = isLoggedIn()

  return (
    <section className="w-full min-h-screen pt-16 text-dark-text bg-section-light">
      <Availability roomsData={roomsData} loggedIn={loggedIn} />
    </section>
  )
}

export default Page
