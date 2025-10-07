'use client'

import { useState } from 'react'
import { sendContactEmail } from '@/app/actions/contact'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your interest in our vehicles..."
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-400">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg text-red-400">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}