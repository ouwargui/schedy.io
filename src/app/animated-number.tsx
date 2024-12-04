'use client'

interface AnimatedNumberProps {
  value: number
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  return (
    <div className="relative w-16 h-20">
      <div
        className="absolute w-full h-full bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-3xl font-bold transition-all duration-300">
        {value}
      </div>
    </div>
  )
}

