'use client'

import UpdatePasswordAction from '@/actions/auth/updatePassword.action'
import FormSubmit from '@/atoms/FormSubmit'
import InputField from '@/atoms/InputField'
import { useFormState } from 'react-dom'
import { useToast } from '../ui/use-toast'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export interface UpdatePasswordFormStateType {
  success?: boolean
  errors: {
    password?: string[]
    password2?: string[]
    _form?: string[]
  }
}

const initialState: UpdatePasswordFormStateType = {
  success: false,
  errors: { _form: [] },
}

const ResetPasswordForm = () => {
  const { toast } = useToast()

  const [formState, formAction] = useFormState(
    UpdatePasswordAction,
    initialState
  )

  useEffect(() => {
    if (formState.success) {
      toast({
        description: 'Please sign in with your new password',
        variant: 'default',
      })
      redirect('/auth/signin')
    }
  }, [formState.success, toast])

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <InputField
        name="password"
        type="password"
        id="password"
        label="New Password"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['password']?.join(' ')}
      />
      <InputField
        name="password2"
        type="password"
        id="password2"
        label="Re-enter new Password"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['password2']?.join(' ')}
      />
      <p className="my-2 text-sm text-red-500">
        {formState.errors['_form']?.join(', ')}
      </p>
      <FormSubmit className="my-4" variant={'secondary'} />
    </form>
  )
}

export default ResetPasswordForm
