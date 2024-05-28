import { Button } from '../ui/button'

const SubscribeSection = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-4 bg-subscribe-bg bg-no-repeat bg-cover text-light-text">
      <div className="px-4 md:px-12 max-w-[1440px] flex flex-col gap-4">
        <h2 className="text-4xl md:text-6xl font-medium font-playfair">
          Be the first to get latest Updates
        </h2>
        <p className="w-4/5 md:w-3/5 lg:w-2/5">
          Sign up below to be the first to know about our upcoming specials,
          vacation offers and exciting new developments from Ruby Resorts
        </p>
        <div className="max-w-[768px] my-4 flex flex-col gap-8">
          <input
            type="email"
            readOnly
            className="border py-3 px-2 rounded-md w-4/5"
            placeholder="Email Address"
          />
          <Button variant={'secondary'} className="w-max">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
