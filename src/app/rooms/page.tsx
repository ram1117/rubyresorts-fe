import RoomItem from '@/components/roomspage/RoomItem'
import { urlGetRooms } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'

export const revalidate = 3600

const Page = async () => {
  const response = await makeApiRequest(API_METHODS.GET, urlGetRooms())

  if (!response?.ok) {
    return (
      <h1 className="text-2xl italic my-10 text-center">
        Unable to get data for this page
      </h1>
    )
  }

  const roomsData = await response?.json()

  return (
    <div className="px-6 md:px-12 mt-12 md:mt-20 max-w-[1440px] mx-auto flex flex-col items-center">
      <h1 className="font-playfair text-xl lg:text-2xl xl:text-4xl w-11/12 md:w-4/5 lg:w-9/12 max-w-[1024x] text-center font-light tracking-wider">
        Our diverse range of lodging options ensures there&apos;s something for
        everyone, whether you&apos;re seeking a romantic retreat, a family
        vacation, or a solo escape.
      </h1>
      <ul className="w-full my-6 lg:my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
        {roomsData.map((room: any) => (
          <RoomItem key={room._id} room={room}></RoomItem>
        ))}
      </ul>
    </div>
  )
}
export default Page
