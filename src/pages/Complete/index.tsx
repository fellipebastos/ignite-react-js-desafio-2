import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Navigate, useLocation } from 'react-router-dom'

import { PAYMENT_OPTIONS } from '../../@types/Payment'

import { CheckoutFormData } from '../Checkout'

import completeImg from '../../assets/complete.svg'

import { CompleteContainer, OrderInfo } from './styles'

interface LocationState extends CheckoutFormData {}

export function Complete() {
  const location = useLocation()

  if (!location.state) {
    return <Navigate to="/checkout" />
  }

  const { address, number, complement, neighborhood, city, state, payment } =
    location.state as LocationState

  return (
    <CompleteContainer>
      <div>
        <header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <OrderInfo>
          <div>
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <p>
              Entrega em{' '}
              <b>
                {address}, {number}, {complement}
              </b>{' '}
              <br />
              {neighborhood} - {city}, {state}
            </p>
          </div>
          <div>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>
              Previsão de entrega <br /> <b>20 min - 30 min</b>
            </p>
          </div>
          <div>
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <p>
              Pagamento na entrega <br /> <b>{PAYMENT_OPTIONS[payment]}</b>
            </p>
          </div>
        </OrderInfo>
      </div>

      <img src={completeImg} alt="" />
    </CompleteContainer>
  )
}
