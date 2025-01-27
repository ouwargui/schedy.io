import { EmailForm } from '@/components/built-in/forms/EmailForm'

type Props = {
  closeModal: () => void
}

export default function SignModal({ closeModal }: Props) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm">
      <div className="z-50 flex flex-col justify-center gap-6 bg-primary-tint rounded-3xl p-4 max-w-[85%] md:max-w-[70%] lg:max-w-[50%] shadow-bright">
        <h2 className="text-text-primary text-lg md:text-xl font-bold uppercase">
          Schedy - Beta Access
        </h2>
        <section className="flex flex-col gap-2 text-sm md:text-base">
          <p className="text-text-primary-shade">
            Thank you for your interest in joining our beta program!
          </p>
          <p className="text-text-primary-shade">
            At the moment, we only support{' '}
            <span className="font-bold underline">Google Calendar</span>.
          </p>
          <p className="text-text-primary-shade">
            We’re committed to expanding our support to include more calendar
            and scheduling services in the future, so stay tuned!
          </p>
        </section>
        <EmailForm postFunction={closeModal} />
        <button
          type="button"
          className="text-text-primary-shade underline cursor-pointer text-sm md:text-base pr-1 text-left w-min"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
