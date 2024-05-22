'use client'

import SigninAction from '@/actions/auth/signin.action'
import FormSubmit from '@/atoms/FormSubmit'
import InputField from '@/atoms/InputField'
import { useFormState } from 'react-dom'

export interface SinginFormStateType {
  errors: {
    username?: string[]
    password?: string[]
    _form?: string[]
  }
}

const initialState: SinginFormStateType = { errors: { _form: [] } }

const SigninForm = () => {
  const [formState, formAction] = useFormState(SigninAction, initialState)

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <InputField
        label="Username"
        type="text"
        id="username"
        name="username"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['username']?.join(', ')}
      />

      <InputField
        label="Password"
        type="password"
        id="password"
        name="password"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['password']?.join(', ')}
      />
      <p className="my-2 text-sm text-red-500">
        {formState.errors['_form']?.join(', ')}
      </p>
      <FormSubmit className="my-4" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default SigninForm
