'use server'
import { AvailabilityFormStateType } from '@/components/availability/Availability'
import { urlGetAvailability } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { DateRange } from 'react-day-picker'
import z from 'zod'

const validationSchema = z.object({
  roomtype: z.string().min(1, { message: 'Please fill this field' }),
  people: z.coerce.number().min(1),
  no_of_rooms: z.coerce.number().min(1),
})

const AvailabilityAction = async (
  date: DateRange | undefined,
  formState: AvailabilityFormStateType,
  formData: FormData
): Promise<AvailabilityFormStateType> => {
  const validate = validationSchema.safeParse(
    Object.fromEntries(formData.entries())
  )
  if (!validate.success) {
    return { errors: validate.error.flatten().fieldErrors }
  }

  let data: any

  try {
    const response = await makeApiRequest(
      API_METHODS.POST,
      urlGetAvailability(),
      {
        fromdate: date?.from,
        todate: date?.to,
        no_of_rooms: validate.data.no_of_rooms,
        roomtype: validate.data.roomtype,
      }
    )
    if (!response?.ok) {
      const error = await response?.json()
      return { errors: { _form: [error.message] } }
    }

    data = await response.json()
  } catch (error) {
    if (error instanceof Error) return { errors: { _form: [error.message] } }
    return { errors: { _form: ['Something went wrong'] } }
  }

  return { success: true, errors: {}, data }
}

export default AvailabilityAction
