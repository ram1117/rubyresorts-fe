'use form'

import ForgotAction from '@/actions/auth/forgot.action'
import FormSubmit from '@/atoms/FormSubmit'
import InputField from '@/atoms/InputField'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useToast } from '../ui/use-toast'
import { redirect } from 'next/navigation'

export interface ForgotFormStateType {
  success: boolean
  errors: {
    email?: string[]
    _form?: string[]
  }
}

const initialState: ForgotFormStateType = {
  success: false,
  errors: { _form: [] },
}

const ForgotForm = () => {
  const { toast } = useToast()
  const [formState, formAction] = useFormState(ForgotAction, initialState)

  useEffect(() => {
    if (formState.success) {
      toast({
        description: 'Please check your e-mail for OTP',
        variant: 'default',
      })
      redirect('/auth/otppage')
    }
  }, [formState.success, toast])

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <InputField
        label={'Email'}
        name={'email'}
        id={'email'}
        type={'email'}
        error={formState.errors['email']?.join(', ')}
        inputClassName="bg-transparent mt-2"
      />
      <p className="my-2 text-sm text-red-500">
        {formState.errors['_form']?.join(', ')}
      </p>
      <FormSubmit className="my-4" variant={'secondary'} />
    </form>
  )
}

export default ForgotForm
