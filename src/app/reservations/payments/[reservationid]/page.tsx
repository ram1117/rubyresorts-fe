import DataNotAvailable from '@/atoms/DataNotAvailable'
import StripeCheckout from '@/components/reservations/StripeCheckout'
import { urlGetPaymentIntent } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'

const Page = async ({ params }: { params: { reservationid: string } }) => {
  const id = params.reservationid
  const response = await makeApiRequest(
    API_METHODS.GET,
    urlGetPaymentIntent(id),
    {},
    await getCookies()
  )

  if (!response?.ok) {
    return <DataNotAvailable />
  }

  const data = await response?.json()
  return (
    <StripeCheckout
      clientSecret={data.secret}
      totalAmount={data.reservation.total}
    ></StripeCheckout>
  )
}

export default Page
