import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'

import { useCart } from '../../../../hooks/useCart'

import { formatMoney } from '../../../../utils/formatMoney'

import { ProductProps } from '../../../../@types/Product'

import {
  CoffeeCardContainer,
  CoffeeCardTags,
  CoffeeCardPrice,
  CoffeeCardActions,
  ShoppingCartButton,
} from './styles'

interface CoffeeCardProps {
  data: ProductProps
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { add } = useCart()
  const [quantity, setQuantity] = useState(1)

  const { title, description, image, price, tags } = data

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    add({ ...data, quantity })
  }

  const formattedPrice = formatMoney(price)

  return (
    <CoffeeCardContainer>
      <img src={`/images/coffees/${image}`} alt={description} />

      <CoffeeCardTags>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </CoffeeCardTags>

      <header>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      <footer>
        <CoffeeCardPrice>
          <span>R$</span> {formattedPrice}
        </CoffeeCardPrice>

        <CoffeeCardActions>
          <Counter
            total={quantity}
            onAdd={handleIncreaseQuantity}
            onRemove={handleDecreaseQuantity}
          />

          <ShoppingCartButton type="button" onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </CoffeeCardActions>
      </footer>
    </CoffeeCardContainer>
  )
}
