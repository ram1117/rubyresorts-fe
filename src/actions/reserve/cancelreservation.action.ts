'use server'

import { CancelResFormType } from '@/components/reservations/CancelReservationForm'
import { urlCancelBooking } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'

const CancelReservationAction = async (
  reservationId: string
): Promise<CancelResFormType> => {
  try {
    const response = await makeApiRequest(
      API_METHODS.PATCH,
      urlCancelBooking(reservationId),
      {},
      await getCookies()
    )

    if (!response?.ok) {
      const error = await response?.json()
      return { errors: { _form: [error.message] } }
    }
  } catch (error) {
    if (error instanceof Error) return { errors: { _form: [error.message] } }
    return { errors: { _form: ['Something went wrong'] } }
  }

  return { success: true, errors: {} }
}

export default CancelReservationAction
