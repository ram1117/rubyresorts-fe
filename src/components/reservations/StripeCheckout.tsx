'use client'

import getStripe from '@/lib/payments'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'

interface StripeCheckoutProps {
  clientSecret: string
}

const StripeCheckout = ({ clientSecret }: StripeCheckoutProps) => {
  const stripe = getStripe()
  return (
    <Elements
      options={{ clientSecret: clientSecret, appearance: { theme: 'stripe' } }}
      stripe={stripe}
    >
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  )
}

export default StripeCheckout
