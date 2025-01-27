type Props = {
  children: string
}

export function Title({ children }: Props) {
  return (
    <p className="text-text-primary font-semibold mt-2 text-lg">{children}</p>
  )
}
