'use client'

import InputField from '@/atoms/InputField'
import { Card } from '../ui/card'
import FormSubmit from '@/atoms/FormSubmit'
import { useFormState } from 'react-dom'
import { UpdatePasswordFormStateType } from '../auth/ResetPasswordForm'
import UpdatePasswordAction from '@/actions/auth/updatePassword.action'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

const initialState: UpdatePasswordFormStateType = {
  success: false,
  errors: {
    _form: [],
  },
}

const PasswordChangeForm = () => {
  const [formState, formAction] = useFormState(
    UpdatePasswordAction,
    initialState
  )

  useEffect(() => {
    if (formState.success) {
      redirect('/account')
    }
  }, [formState.success])

  return (
    <Card>
      <form
        className="w-11/12 mx-auto my-8 p-4 flex flex-col gap-4"
        action={formAction}
      >
        <InputField
          type="password"
          id="password"
          name="password"
          label="Enter New Password"
          error={formState.errors['password']?.join(', ')}
        ></InputField>
        <InputField
          type="password"
          id="password2"
          name="password2"
          label="Confirm New Password"
          error={formState.errors['password2']?.join(', ')}
        ></InputField>
        <p className="my-1 text-sm text-red-800">
          {formState.errors['_form']?.join(', ')}
        </p>
        <FormSubmit className="w-max" variant={'default'} />
      </form>
    </Card>
  )
}

export default PasswordChangeForm
