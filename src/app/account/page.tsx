import DataNotAvailable from '@/atoms/DataNotAvailable'
import EditPassword from '@/components/account/EditPassword'
import SendVerificationForm from '@/components/auth/SendVerificationForm'
import SignOutButton from '@/components/navbar/SignOutButton'
import { Button } from '@/components/ui/button'
import { urlUserInfo } from '@/lib/apilinks'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import { getCookies } from '@/lib/cookies'
import Link from 'next/link'

const Page = async () => {
  const response = await makeApiRequest(
    API_METHODS.GET,
    urlUserInfo(),
    {},
    await getCookies()
  )
  if (!response?.ok) return <DataNotAvailable />
  const userdata = await response.json()
  return (
    <section className="min-h-screen flex flex-col items-center my-12 text-dark-text">
      <h1 className="font-playfair text-xl lg:text-2xl xl:text-4xl font-light tracking-wider my-12">
        Account Details
      </h1>
      <div className="text-sm lg:text-base w-11/12 lg:w-4/5 max-w-[768px] my-8 mx-auto flex flex-col gap-4">
        <div className="flex justify-between border-b p-2 items-center">
          <p>Full Name</p>
          <p>{userdata.fullname}</p>
        </div>
        <div className="flex justify-between border-b p-2 items-center">
          <p>Username</p>
          <p>{userdata.username}</p>
        </div>
        <div className="flex justify-between border-b p-2 items-center">
          <p>Email</p>
          <p>{userdata.email}</p>
        </div>

        <div className="flex justify-between border-b p-2 items-center">
          <p>Verified</p>
          <div className="flex gap-2 items-center">
            <div>
              {userdata.verified ? (
                'Yes'
              ) : (
                <div>
                  <SendVerificationForm />
                </div>
              )}
            </div>
          </div>
        </div>
        <EditPassword />
        <div className="flex justify-between border-b p-2 items-center">
          <p>My Reservations</p>
          <Button variant={'outline'} className="px-4 border border-card">
            <Link href="/reservations">Reservations</Link>
          </Button>
        </div>
        <div className="flex justify-between border-b p-2 items-center">
          <p>Sign Out</p>
          <SignOutButton />
        </div>
      </div>
    </section>
  )
}

export default Page
