'use client'

import OtpForm from '@/components/auth/OtpForm'
import ResendOtpForm from '@/components/auth/ResendOtpForm'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card'
import { redirect, useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  if (!email) {
    redirect('/auth/forgot')
  }

  return (
    <Card className="bg-card text-light-text mx-4 border-none  md:max-w-[430px] my-16 md:my-32">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">Enter OTP</CardTitle>
        <CardDescription className="text-xs md:text-base">
          Please enter OTP received in your E-mail
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OtpForm email={email}></OtpForm>
      </CardContent>
      <CardFooter>
        <ResendOtpForm email={email}></ResendOtpForm>
      </CardFooter>
    </Card>
  )
}

export default Page
