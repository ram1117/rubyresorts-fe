import FormSubmit from '@/atoms/FormSubmit'
import InputField from '@/atoms/InputField'

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <InputField
        label="Full Name"
        type="text"
        required
        id="fullname"
        name="fullname"
        inputClassName="bg-transparent mt-2"
      />
      <InputField
        label="Email"
        type="email"
        required
        id="email"
        name="email"
        inputClassName="bg-transparent mt-2"
      />

      <InputField
        label="Mobile"
        type="tel"
        required
        id="mobile"
        name="mobile"
        maxLength={15}
        inputClassName="bg-transparent mt-2"
      />

      <InputField
        label="Username"
        type="text"
        required
        id="username"
        name="username"
        inputClassName="bg-transparent mt-2"
      />

      <InputField
        label="Password"
        type="password"
        required
        id="password1"
        name="password1"
        inputClassName="bg-transparent mt-2"
      />

      <InputField
        label="Confirm Password"
        type="password"
        required
        id="password2"
        name="password2"
        inputClassName="bg-transparent mt-2"
      />

      <FormSubmit className="my-4" variant={'secondary'}></FormSubmit>
    </form>
  )
}

export default SignUpForm
