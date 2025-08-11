'use client'
import { useEffect, useRef } from 'react'

type Props = {
  date: string
  title: string
  children: React.ReactNode
}

export default function Timeline({ date, title, children }: Props) {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (itemRef.current) observer.observe(itemRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className='relative pl-8 md:pl-8'>
      {/* 縦線 */}
      <div className='absolute left-0 top-0 h-full w-0.5 bg-primary' />

      {/* タイムラインアイテム */}
      <div ref={itemRef} className='relative pb-6 opacity-0 translate-y-10 transition-all duration-700 ease-out'>
        {/* ドット */}
        <div className='absolute left-[-37px] top-2 h-3 w-3 rounded-full bg-secondary' />

        {/* コンテンツ */}
        <div className='font-bold text-secondary mb-2'>{date}</div>
        <div className='timeline-content'>
          <h4 className='text-xl mb-2'>{title}</h4>
          <div className='prose prose-p:mb-4 prose-ul:ml-2 prose-ul:list-disc text-gray-300'>{children}</div>
        </div>
      </div>
    </div>
  )
}