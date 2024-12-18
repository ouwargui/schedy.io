type Props = {
  children: string
}

export function Description({ children }: Props) {
  return <span className="text-text-primary-shade">{children}</span>
}
