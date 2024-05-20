import SigninForm from '@/components/auth/SignInForm'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'

const Page = () => {
  return (
    <Card className="bg-card text-light-text mx-4 border-none  md:max-w-[430px] my-16 md:my-32">
      <CardHeader className="">
        <CardTitle className="text-lg md:text-2xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-base">
          Sign in to access your bookings and your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <CardFooter className="text-sm italic flex flex-col gap-4 items-start">
        <h3 className="">
          <Link href="/forgot">Forgot Passsword?</Link>
        </h3>

        <h3>
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="underline underline-offset-2">
            <span className="not-italic text-base mx-2 font-semibold">
              Create one
            </span>
          </Link>
        </h3>
      </CardFooter>
    </Card>
  )
}

export default Page
