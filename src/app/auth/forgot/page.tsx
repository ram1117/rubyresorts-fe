import ForgotForm from '@/components/auth/ForgotForm'
import {
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  Card,
  CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'

const Page = () => {
  return (
    <Card className="bg-card text-light-text mx-4 border-none  md:max-w-[430px] my-16 md:my-32">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">Get OTP</CardTitle>
        <CardDescription className="text-xs md:text-base">
          Enter registered E-mail to get OTP
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotForm />
      </CardContent>
      <CardFooter className="text-sm italic flex flex-col gap-4 items-start">
        <h3>
          Have an account
          <Link href="/auth/signin" className="underline underline-offset-2">
            <span className="not-italic text-base mx-2 font-semibold">
              Sign in?
            </span>
          </Link>
        </h3>
      </CardFooter>
    </Card>
  )
}

export default Page
