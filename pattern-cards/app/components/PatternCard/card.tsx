import { PatternCardProps } from './types'

export const PatternCard = (props: PatternCardProps) => {
  const { id, name, description } = props
  return (
    <div>
      <h1>Pattern Card</h1>
      <span>{id}</span>
      <span>{name}</span>
      <span>{description}</span>
    </div>
  )
}
