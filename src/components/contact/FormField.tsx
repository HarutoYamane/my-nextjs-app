type FormFieldProps = {
  label: string
  id: string
  type?: 'text' | 'email' | 'textarea'
  required?: boolean
  rows?: number
}

export function FormField({ label, id, type = 'text', required = false, rows }: FormFieldProps) {
  const baseClassName =
    'w-full px-4 py-2 rounded-md bg-card-bg border border-gray-600 text-text focus:outline-none focus:ring-2 focus:ring-primary'

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-text mb-2'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea id={id} name={id} rows={rows} required={required} className={baseClassName} />
      ) : (
        <input type={type} id={id} name={id} required={required} className={baseClassName} />
      )}
    </div>
  )
}
