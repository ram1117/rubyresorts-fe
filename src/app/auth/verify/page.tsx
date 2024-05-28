'use client'

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import LoadingSpinner from '@/components/ui/loadingspinner'
import { urlVerifyEmail } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

const Page = () => {
  const { toast } = useToast()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    async function postToken() {
      const response = await makeApiRequest(
        API_METHODS.POST,
        urlVerifyEmail(),
        { token }
      )
      const responseData = await response?.json()
      if (!response?.ok) {
        setError(responseData.message)
      } else {
        setLoading(false)
        toast({
          description: 'Your Email has been verified',
          variant: 'default',
        })
        router.push('/')
      }
    }
    if (token) {
      postToken()
    }
  }, [router, toast, token])

  return (
    <Card className="bg-card text-light-text mx-4 border-none w-11/12 md:max-w-[630px] w-11/12 md:w-3/5 my-16 md:my-32">
      <CardHeader className="">
        <CardTitle className="text-lg md:text-2xl">
          Verifying E-mail address
        </CardTitle>
        <CardDescription className="text-xs md:text-base">
          Please wait while we verify your E-mail
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-6 flex justify-center">
          {loading && <LoadingSpinner></LoadingSpinner>}
        </div>

        <div className="my-6">
          {error && <p className="text-xs text-center text-red-500">{error}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
export default Page
