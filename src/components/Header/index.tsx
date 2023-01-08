import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { useCart } from '../../hooks/useCart'

import {
  ActionsContainer,
  HeaderContainer,
  HeaderContent,
  ShoppingCartButton,
} from './styles'

export function Header() {
  const { items, totalItems } = useCart()

  const hasItems = !!totalItems

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <ActionsContainer>
          <div>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </div>

          <ShoppingCartButton to={hasItems ? '/checkout' : ''}>
            <ShoppingCart size={22} weight="fill" />
            {hasItems && <span>{totalItems}</span>}
          </ShoppingCartButton>
        </ActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
