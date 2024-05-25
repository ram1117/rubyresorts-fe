'use client'

import CancelReservationAction from '@/actions/reserve/cancelreservation.action'
import FormSubmit from '@/atoms/FormSubmit'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

interface CancelReservationFormProps {
  reservationId: string
}

export interface CancelResFormType {
  success?: boolean
  errors: {
    _form?: string[]
  }
}

const initalState: CancelResFormType = {
  success: false,
  errors: {
    _form: [],
  },
}
const CancelReservationForm = ({
  reservationId,
}: CancelReservationFormProps) => {
  const bindedAction = CancelReservationAction.bind(null, reservationId)
  const [formState, formAction] = useFormState(bindedAction, initalState)

  useEffect(() => {
    if (formState.success) {
      redirect('/reservations')
    }
  }, [formState.success])

  return (
    <form action={formAction}>
      <FormSubmit text="Confirm"></FormSubmit>
      <p className="text-xs text-red-800">
        {formState.errors['_form']?.join(', ')}
      </p>
    </form>
  )
}

export default CancelReservationForm
