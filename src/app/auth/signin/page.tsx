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
    <Card className="bg-card text-light-text mx-4 border-none">
      <CardHeader className="">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Sign in to access your bookings and account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <CardFooter className="text-sm italic">
        Don&apos;t have an account?{' '}
        <Link href="/auth/signup" className="underline underline-offset-2">
          <span className="not-italic text-base mx-2 font-semibold">
            Create one
          </span>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Page
