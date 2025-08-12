interface Props {
  date: Date
}

export default function FormattedDate({ date }: Props) {
  const iso = date.toISOString()
  const formatted = iso.split('T')[0].split('-').join('.')

  return (
    <time dateTime={iso} className='text-gray-400'>
      {formatted}
    </time>
  )
}
