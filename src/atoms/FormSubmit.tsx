'use client'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import LoadingSpinner from '@/components/ui/loadingspinner'

interface FormSubmitProps {
  text?: string
  className?: string
  variant?:
    | 'outline'
    | 'default'
    | 'destructive'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined
  spinnerColor?: string
}

const FormSubmit = ({
  variant = 'outline',
  text = 'Submit',
  className = '',
  spinnerColor = '#212429',
}: FormSubmitProps) => {
  const { pending } = useFormStatus()
  return (
    <Button variant={variant} className={`${className}`} type="submit">
      {pending ? <LoadingSpinner currentColor={spinnerColor} /> : text}
    </Button>
  )
}

export default FormSubmit
