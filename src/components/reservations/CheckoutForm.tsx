'use client'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { FormEvent, useEffect, useState } from 'react'
import LoadingSpinner from '../ui/loadingspinner'
import { Button } from '../ui/button'

interface CheckoutFormProps {
  clientSecret: string
}

const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!stripe) {
      return
    }
    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('')
          break
      }
    })
  }, [stripe, clientSecret])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_API_NEXT_SERVER}/reservations`,
      },
    })

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message!)
    } else {
      console.log(error)
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="max-w-[400px] mx-auto gap-4"
    >
      <PaymentElement id="payment-element" options={{ layout: 'accordion' }} />

      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="my-4"
      >
        <span id="button-text">
          {isLoading ? <LoadingSpinner /> : 'Pay now'}
        </span>
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm
