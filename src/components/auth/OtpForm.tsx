'use client'

import FormSubmit from '@/atoms/FormSubmit'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { useFormState } from 'react-dom'
import OtpSubmitAction from '@/actions/auth/otpSubmit.action'

export interface OtpFormStateType {
  success?: boolean
  errors: {
    otp?: string[]
    _form?: string[]
  }
}

const initialState: OtpFormStateType = {
  errors: {
    _form: [],
  },
}

interface OtpFormProps {
  email: string
}

const OtpForm = ({ email }: OtpFormProps) => {
  const bindedFormAction = OtpSubmitAction.bind(null, email)
  const [formState, formAction] = useFormState(bindedFormAction, initialState)

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        containerClassName="flex justify-center"
        name="otp"
      >
        <InputOTPGroup className="gap-1 md:gap-2">
          <InputOTPSlot index={0}></InputOTPSlot>
          <InputOTPSlot index={1}></InputOTPSlot>
          <InputOTPSlot index={2}></InputOTPSlot>
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup className="gap-1 md:gap-2">
          <InputOTPSlot index={3}></InputOTPSlot>
          <InputOTPSlot index={4}></InputOTPSlot>
          <InputOTPSlot index={5}></InputOTPSlot>
        </InputOTPGroup>
      </InputOTP>
      <p className="mb-1 text-sm text-red-500">
        {formState.errors['otp']?.join(', ')}
      </p>
      <p className="mb-1 text-sm text-red-500">
        {formState.errors['_form']?.join(', ')}
      </p>
      <FormSubmit className="my-4" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default OtpForm
