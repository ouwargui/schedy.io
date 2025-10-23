'use client'

import { type FormEvent, useState } from 'react'

type Props = {
  closeModal: () => void
}

export default function SignModal({ closeModal }: Props) {
  const [email, setEmail] = useState('')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    return false
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-xs">
      <div className="z-50 flex flex-col justify-center gap-6 bg-primary-tint rounded-3xl p-4 max-w-[85%] md:max-w-[70%] lg:max-w-[50%] shadow-bright">
        <h2 className="text-text-primary text-lg md:text-xl font-bold uppercase">
          Schedy - Beta Access
        </h2>
        <section className="flex flex-col gap-2 text-sm md:text-base">
          <p className="text-text-primary-shade">
            Thank you for your interest in joining our beta program! At the
            moment, we only support{' '}
            <span className="font-bold underline">Google Calendar</span>.
          </p>
          <p className="text-text-primary-shade">
            We’re committed to expanding our support to include more calendar
            and scheduling services in the future, so stay tuned!
          </p>
        </section>
        <form
          className="flex flex-col -mt-2 text-sm md:text-base"
          onSubmit={(event) => sendEmail(event)}
        >
          <span className="text-text-primary-shade pl-1 font-bold">Email:</span>
          <div className="flex">
            <input
              type="email"
              className="bg-text-primary w-3/4 px-2 rounded-l-xl border-text-primary-shade-active border-l-2 border-y-2 text-primary-tint font-semibold lowercase"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <button
              type="submit"
              className="bg-primary-tint text-text-primary py-2 px-6 rounded-r-xl w-1/4 text-xs flex justify-center md:text-sm transition-colors hover:bg-text-primary hover:text-primary-tint active:bg-text-primary-shade-active uppercase font-semibold border-text-primary-shade-active border-r-2 border-y-2"
            >
              Submit
            </button>
          </div>
        </form>
        <p
          className="text-text-primary-shade underline cursor-pointer text-sm md:text-base pr-1"
          onClick={closeModal}
        >
          Cancel
        </p>
      </div>
    </div>
  )
}
