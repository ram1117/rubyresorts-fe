import FormSubmit from '@/atoms/FormSubmit'
import InputField from '@/atoms/InputField'

const SigninForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <InputField
        label="Email"
        type="email"
        required
        id="email"
        name="email"
        inputClassName="bg-transparent mt-2"
      />

      <InputField
        label="Password"
        type="password"
        required
        id="password"
        name="password"
        inputClassName="bg-transparent mt-2"
      />

      <FormSubmit className="my-4" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default SigninForm
