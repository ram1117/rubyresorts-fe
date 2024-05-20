export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-main-bg bg-no-repeat bg-cover flex flex-col justify-center">
      <section className="mx-4 px-4 md:mx-20 md:px-12 text-light-text">
        <div className="mb-12 font-playfair">
          <h2 className="tracking-[0.8rem] text-sm md:text-base uppercase mb-4">
            Welcome to the{' '}
          </h2>
          <h1 className="font-radio-canada text-4xl md:text-6xl font-medium ">
            Ruby Resorts
          </h1>
        </div>

        <div className="text-base md:text-xl">
          <h3> Escape to the tropical paradise.</h3>
          <h3> Discover the Ultimate Luxury Resort Experience</h3>
        </div>
      </section>
    </main>
  )
}
