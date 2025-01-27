import type { PropsWithChildren } from 'react'

export function StatusButton({ children }: PropsWithChildren) {
  return (
    <div className="rounded-r-xl w-1/4 max-h-9 md:max-h-10 text-xs flex justify-center transition-colors bg-text-primary text-primary-tint uppercase font-semibold border-text-primary-shade-active border-r-2 border-y-2">
      {children}
    </div>
  )
}
