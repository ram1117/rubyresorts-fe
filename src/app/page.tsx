import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-main-bg bg-no-repeat bg-cover">
      <Link href="/auth/signin">Sign in</Link>
      <h1 className="font-radio-canada text-5xl text-white font-bold text-center">
        Ruby Resorts
      </h1>
    </main>
  )
}
