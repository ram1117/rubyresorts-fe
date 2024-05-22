import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface InputFieldProps {
  label: string
  type?: string
  id: string
  name: string
  required?: boolean
  minLength?: number
  maxLength?: number
  className?: string
  labelClassName?: string
  inputClassName?: string
  error?: string
  disabled?: boolean
  readonly?: boolean
  defaultValue?: string
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
  minLength = 6,
  maxLength = 200,
  error = '',
  disabled = false,
  readonly = false,
  defaultValue = '',
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
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readonly}
        defaultValue={defaultValue}
      ></Input>
      <p className="my-1 text-xs text-red-500">{error}</p>
    </div>
  )
}

export default InputField
