'use client'

import SignupAction from '@/actions/auth/signup.action'
import FormSubmit from '@/atoms/FormSubmit'
import InputField from '@/atoms/InputField'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useToast } from '../ui/use-toast'
import { redirect } from 'next/navigation'

export interface SignupFormStateType {
  success?: boolean
  errors: {
    fullname?: string[]
    username?: string[]
    email?: string[]
    password?: string[]
    password2?: string[]
    mobile?: string[]
    _form?: string[]
  }
}

const initalState: SignupFormStateType = {
  success: false,
  errors: { _form: [] },
}

const SignUpForm = () => {
  const { toast } = useToast()
  const [formState, formAction] = useFormState(SignupAction, initalState)

  useEffect(() => {
    if (formState.success) {
      toast({
        description: 'Account created, please sign in',
        variant: 'default',
      })
      redirect('/auth/signin')
    }
  }, [formState.success, toast])

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <InputField
        label="Full Name"
        type="text"
        id="fullname"
        name="fullname"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['fullname']?.join(', ')}
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        name="email"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['email']?.join(', ')}
      />

      <InputField
        label="Mobile"
        type="tel"
        id="mobile"
        name="mobile"
        maxLength={15}
        inputClassName="bg-transparent mt-2"
        error={formState.errors['mobile']?.join(', ')}
      />

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

      <InputField
        label="Confirm Password"
        type="password"
        id="password2"
        name="password2"
        inputClassName="bg-transparent mt-2"
        error={formState.errors['password2']?.join(', ')}
      />
      <p className="my-2 text-sm text-red-500">
        {formState.errors['_form']?.join(', ')}
      </p>
      <FormSubmit className="my-4" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default SignUpForm
