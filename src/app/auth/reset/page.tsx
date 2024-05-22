import ResetPasswordForm from '@/components/auth/ResetPasswordForm'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

const Page = () => {
  return (
    <Card className="bg-card text-light-text mx-4 border-none md:max-w-[430px] my-16 md:my-32">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">Reset Password</CardTitle>
        <CardDescription className="text-xs md:text-base">
          Please enter your new password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm />
      </CardContent>
    </Card>
  )
}

export default Page
