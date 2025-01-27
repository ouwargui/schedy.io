'use client'

import { Loader } from '@/components/svg/Loader'
import { type FormEvent, useState } from 'react'
import { SubmitButton } from '../elements/SubmitButton'
import { StatusButton } from '../elements/StatusButton'
import { Ok } from '@/components/svg/Ok'
import { SendEmail } from '@/utils/Emails/EmailHandler'

type Props = {
  postFunction: () => void
}

type Status = 'default' | 'loading' | 'ok'

export function EmailForm({ postFunction }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('default')

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setStatus('loading')
    e.preventDefault()
    try {
      await SendEmail(email)
      setStatus('ok')
      setTimeout(() => {
        setStatus('default')
        postFunction()
      }, 2500)
    } catch {
      postFunction()
    }
  }

  return (
    <form
      className="flex flex-col -mt-2 text-sm md:text-base"
      onSubmit={(event) => sendEmail(event)}
    >
      <span className="text-text-primary-shade pl-1 font-bold">
        Your Email:
      </span>
      <div className="flex">
        <input
          type="email"
          className="bg-text-primary w-3/4 px-2 rounded-l-xl border-text-primary-shade-active border-l-2 border-y-2 text-primary-tint font-semibold lowercase"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        {status === 'default' && (
          <SubmitButton type="submit" disabled={!email.length} />
        )}
        {status === 'loading' && (
          <StatusButton>
            <Loader />
          </StatusButton>
        )}
        {status === 'ok' && (
          <StatusButton>
            <Ok />
          </StatusButton>
        )}
      </div>
    </form>
  )
}
