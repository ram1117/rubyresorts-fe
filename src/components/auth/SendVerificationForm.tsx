import SendVerificationAction from '@/actions/auth/sendverification.action'
import FormSubmit from '@/atoms/FormSubmit'

const SendVerificationForm = () => {
  return (
    <form action={SendVerificationAction}>
      <FormSubmit text="Send Email" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default SendVerificationForm
