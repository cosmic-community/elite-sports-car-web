'use server'

import { Resend } from 'resend'
import ContactEmailTemplate from '@/components/emails/ContactEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { name, email, phone, message } = data

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: 'Please fill in all required fields.'
      }
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmailTemplate({ name, email, phone, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        success: false,
        error: 'Failed to send email. Please try again later.'
      }
    }

    return {
      success: true,
      data: emailData
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    }
  }
}