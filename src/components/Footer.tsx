import { SITE_TITLE } from '@/consts'

export default function Footer() {
  const today = new Date()

  return (
    <footer className='p-4 text-sm text-text text-center'>
      &copy; {today.getFullYear()} {SITE_TITLE} All rights reserved.
    </footer>
  )
}
