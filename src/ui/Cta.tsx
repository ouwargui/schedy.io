'use client'

import { useState } from 'react'
import SignModal from './SignModal'

export function CTA() {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <>
      {open && <SignModal closeModal={closeModal} />}
      <section className="flex flex-col items-center justify-center gap-2">
        <div className="pt-2 md:pt-0 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:pl-4 bg-text-shade shadow-bright">
          <span className="text-text-primary font-semibold">Sounds good?</span>
          <button
            className="px-6 py-2 bg-text-primary hover:bg-text-primary-shade active:bg-text-shade text-primary rounded-full uppercase text-sm font-bold transition-colors"
            type="button"
            onClick={openModal}
          >
            Request BETA access
          </button>
        </div>
        <p className="text-sm text-text-shade">Schedy requires MacOS 14+</p>
      </section>
    </>
  )
}
