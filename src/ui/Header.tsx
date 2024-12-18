import Image from 'next/image'

export function Header() {
  return (
    <header>
      <div className="flex flex-col gap-4 items-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-text-primary">
          Schedy.io
        </h1>
        <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-text-shade text-center">
          You work. <span className="underline">We handle your schedule.</span>
        </h2>
      </div>
    </header>
  )
}
