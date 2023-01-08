import { Trash } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'

import { useCart } from '../../../../hooks/useCart'

import { formatMoney } from '../../../../utils/formatMoney'

type Coffee = {
  id: number
  title: string
  description: string
  image: string
  price: number
  tags: string[]
  quantity: number
}

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { increaseQuantity, decreaseQuantity, remove } = useCart()

  const { id, title, image, price, quantity } = data

  function handleIncreaseQuantity() {
    increaseQuantity(id)
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(id)
  }

  function handleRemove() {
    remove(id)
  }

  const formattedPrice = formatMoney(price * quantity)

  return (
    <article>
      <img src={`/images/coffees/${image}`} alt="" />

      <div>
        <header>
          <h3>{title}</h3>
          <span>R$ {formattedPrice}</span>
        </header>

        <div>
          <Counter
            total={quantity}
            onAdd={handleIncreaseQuantity}
            onRemove={handleDecreaseQuantity}
          />
          <button type="button" onClick={handleRemove}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>
    </article>
  )
}
