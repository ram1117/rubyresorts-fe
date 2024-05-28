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
  disabled?: boolean
}

const FormSubmit = ({
  variant = 'outline',
  text = 'Submit',
  className = '',
  spinnerColor = '#212429',
  disabled = false,
}: FormSubmitProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      variant={variant}
      className={`${className} ${disabled ? 'opacity-40' : 'opacity:100'} min-w-[120px]`}
      type="submit"
      disabled={disabled}
    >
      {pending ? <LoadingSpinner currentColor={spinnerColor} /> : text}
    </Button>
  )
}

export default FormSubmit
