import { urlGetRooms } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'

const Page = async () => {
  const response = await makeApiRequest(API_METHODS.GET, urlGetRooms())
  const roomsData = await response?.json()
  if (!response?.ok) {
    throw new Error('Unable to get Error')
  }
  console.log(roomsData)
  return <section>rooms page</section>
}
export default Page
