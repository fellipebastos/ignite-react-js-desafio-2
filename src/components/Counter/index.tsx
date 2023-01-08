import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  total: number
  onAdd: () => void
  onRemove: () => void
}

export function Counter({ total, onAdd, onRemove }: CounterProps) {
  return (
    <CounterContainer>
      <button type="button" onClick={onRemove}>
        <Minus size={14} weight="fill" />
      </button>

      <span>{total}</span>

      <button type="button" onClick={onAdd}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
