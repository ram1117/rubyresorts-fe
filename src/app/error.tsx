'use client'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <section className="flex h-[50vh] flex-col items-center gap-8 justify-center">
      <h1 className="text-center text-lg font-semibold">
        Something went wrong!
      </h1>
      <h2 className="text-light">{error.message}</h2>
    </section>
  )
}
