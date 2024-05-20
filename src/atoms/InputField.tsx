import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface InputFieldProps {
  label: string
  type?: string
  id: string
  name: string
  required?: boolean
  className?: string
  labelClassName?: string
  inputClassName?: string
  error?: string
}

const InputField = ({
  label,
  type = 'text',
  id,
  name,
  required = false,
  className = '',
  labelClassName = '',
  inputClassName = '',
  error = '',
}: InputFieldProps) => {
  return (
    <div className={`${className}`}>
      <Label htmlFor={id} className={labelClassName}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        className={`${inputClassName}`}
      ></Input>
      <p className="my-1 text-xs text-red-800">{error}</p>
    </div>
  )
}

export default InputField
