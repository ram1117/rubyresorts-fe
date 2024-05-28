'use client'

import getStripe from '@/lib/payments'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'

interface StripeCheckoutProps {
  clientSecret: string
  totalAmount: number
}

const StripeCheckout = ({ clientSecret, totalAmount }: StripeCheckoutProps) => {
  const stripe = getStripe()
  return (
    <div className="my-10 flex flex-col gap-8 items-center ">
      <h2 className="text-sm">
        Payment Amount:{' '}
        <span className="text-lg font-semibold">$ {totalAmount}</span>
      </h2>
      <Elements
        options={{
          clientSecret: clientSecret,
          appearance: { theme: 'stripe' },
        }}
        stripe={stripe}
      >
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    </div>
  )
}

export default StripeCheckout
