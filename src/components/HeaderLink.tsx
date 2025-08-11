'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: string
  className?: string
  children: React.ReactNode
}

export default function ActiveLink({ href, className, children, ...props }: Props) {
  const pathname = usePathname()
  const subpath = pathname.match(/[^\/]+/g)
  const isActive = href === pathname || href === '/' + subpath?.[0]

  return (
    <Link href={href} className={`${className || ''} ${isActive && 'gradient-text'}`} {...props}>
      {children}
    </Link>
  )
}