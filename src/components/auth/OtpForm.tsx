'use client'

import FormSubmit from '@/atoms/FormSubmit'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'

const OtpForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        containerClassName="flex justify-center"
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
      <FormSubmit className="my-4" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default OtpForm
