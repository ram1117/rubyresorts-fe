import SignUpForm from '@/components/auth/SignUpForm'
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
    <Card className="bg-card text-light-text mx-4 border-none w-11/12 md:min-w-[350px] md:max-w-[430px] my-16 md:my-32">
      <CardHeader className="">
        <CardTitle className="text-lg md:text-2xl">Create Account</CardTitle>
        <CardDescription className="text-xs md:text-base">
          Create a new account to book rooms, payments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="text-sm italic">
        Have an account?{' '}
        <Link href="/auth/signin" className="underline underline-offset-2">
          <span className="not-italic text-base mx-2 font-semibold">
            Sign in
          </span>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Page
