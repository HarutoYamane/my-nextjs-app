'use client'
import { useState } from 'react'
import { FormField } from '@/components/contact/FormField'

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()

      if (res.ok) {
        setMessage(result.message)
      } else {
        setError(result.message)
      }
    } catch (error) {
      console.error('お問い合わせエラー:', error)
      setError('エラーが発生しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {message && <div className='mb-6 p-4 bg-green-100 text-green-700 rounded-md'>{message}</div>}

      {error && <div className='mb-6 p-4 bg-red-100 text-red-700 rounded-md'>{error}</div>}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <FormField label='お名前' id='name' required />
        <FormField label='メールアドレス' id='email' type='email' required />
        <FormField label='件名' id='subject' required />
        <FormField label='メッセージ' id='message' type='textarea' rows={6} required />

        <div>
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full md:w-auto px-8 py-3 bg-gradient-bg text-white rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </>
  )
}
