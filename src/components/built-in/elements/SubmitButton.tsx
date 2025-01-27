import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export function SubmitButton({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className="bg-primary-tint text-text-primary py-2 px-6 rounded-r-xl w-1/4 text-xs flex justify-center md:text-sm transition-colors hover:bg-text-primary hover:text-primary-tint active:bg-text-primary-shade-active uppercase font-semibold border-text-primary-shade-active border-r-2 border-y-2"
    >
      Submit
    </button>
  )
}
