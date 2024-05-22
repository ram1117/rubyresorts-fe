import InputField from '@/atoms/InputField'
import Timer from './Timer'
import { ForgotFormStateType } from './ForgotForm'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useToast } from '../ui/use-toast'
import ForgotAction from '@/actions/auth/forgot.action'

interface ResendOtpFormProps {
  email: string
}

const initialState: ForgotFormStateType = {
  success: false,
  errors: { _form: [] },
}

const ResendOtpForm = ({ email }: ResendOtpFormProps) => {
  const { toast } = useToast()
  const [formState, formAction] = useFormState(ForgotAction, initialState)

  useEffect(() => {
    if (formState.success) {
      toast({
        description: 'Please check your e-mail for OTP',
        variant: 'default',
      })
    }
  }, [formState.success, toast])

  return (
    <form className="w-full" action={formAction}>
      <InputField
        id="email"
        name="email"
        label=""
        readonly={true}
        inputClassName="border-none text-white bg-transparent p-0 w-max"
        defaultValue={email}
        error={formState.errors['email']?.join(', ')}
      ></InputField>

      <Timer></Timer>
      <p className="my-2 text-sm text-red-500">
        {formState.errors['_form']?.join(', ')}
      </p>
    </form>
  )
}

export default ResendOtpForm
