'use server'

import { EmailSchedy } from '@/components/built-in/email/EmailSchedy'
import { EmailTemplate } from '@/components/built-in/email/EmailTemplate'
import { Resend } from 'resend'

const resendUser = new Resend(process.env.EMAIL_API_KEY1)
const resendSchedy = new Resend(process.env.EMAIL_API_KEY2)
const emailSchedy = process.env.EMAIL as string

export async function SendEmail(email: string) {
  try {
    const { error } = await resendUser.emails.send({
      from: 'Schedy <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank You for your interest in Schedy!',
      react: EmailTemplate(),
    })

    const { error: error2 } = await resendSchedy.emails.send({
      from: 'Schedy <onboarding@resend.dev>',
      to: [emailSchedy],
      subject: 'One more to schedy',
      react: EmailSchedy({ email }),
    })

    if (error || error2) throw new Error()
  } catch {
    throw new Error()
  }
}
