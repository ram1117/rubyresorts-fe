'use server'

import { CreateReservationFormStateType } from '@/components/availability/ConfirmationDialog'
import { urlCreateBooking } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'
import { redirect } from 'next/navigation'
import z from 'zod'

const validationSchema = z.object({
  fromdate: z.date(),
  todate: z.date(),
  no_of_rooms: z.coerce.number().min(1),
  roomtype: z.string(),
  guest_count: z.coerce.number().min(1),
})

const CreateReservationAction = async (
  bookingdata: any
): Promise<CreateReservationFormStateType> => {
  let reservationId: string = ''

  const validate = validationSchema.safeParse(bookingdata)
  if (!validate.success) {
    return { errors: validate.error.flatten().fieldErrors }
  }

  try {
    const response = await makeApiRequest(
      API_METHODS.POST,
      urlCreateBooking(),
      { ...bookingdata },
      await getCookies()
    )

    if (!response?.ok) {
      const error = await response?.json()
      return { success: false, errors: { _form: [error.message] } }
    }

    const responseData = await response.json()
    reservationId += responseData._id
  } catch (error) {
    if (error instanceof Error)
      return { success: false, errors: { _form: [error.message] } }
    return { success: false, errors: { _form: ['Something went wrong'] } }
  }

  redirect(`/reservations/payments/${reservationId}`)
}

export default CreateReservationAction
