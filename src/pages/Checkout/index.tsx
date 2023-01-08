import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { Input } from '../../components/Input'
import { CoffeeCard } from './components/CoffeeCard'

import { useCart } from '../../hooks/useCart'

import { formatMoney } from '../../utils/formatMoney'

import {
  AddressForm,
  AddressInfo,
  OrderSection,
  CheckoutContainer,
  PaymentInfo,
  PaymentForm,
  ResumeSection,
  ResumeTotal,
} from './styles'
import { useNavigate } from 'react-router-dom'

import { PaymentTypes } from '../../@types/Payment'

export type CheckoutFormData = {
  cep: string
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  payment: PaymentTypes
}

export function Checkout() {
  const navigate = useNavigate()
  const { items, total: subtotal, totalItems, reset } = useCart()

  const { handleSubmit, register } = useForm<CheckoutFormData>()

  function handleConfirmOrder(data: CheckoutFormData) {
    reset()
    navigate('/complete', {
      state: data,
    })
  }

  const freightValue = 1.75
  const freightTotal = freightValue * totalItems

  const formattedSubtotal = formatMoney(subtotal)
  const formattedTotal = formatMoney(subtotal + freightTotal)
  const formattedFreightTotal = formatMoney(freightTotal)

  const isEmptyCart = totalItems === 0

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <OrderSection>
          <h2>Complete seu pedido</h2>

          <div>
            <AddressInfo>
              <MapPinLine size={22} />

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressInfo>
            <AddressForm>
              <Input placeholder="CEP" required {...register('cep')} />
              <Input placeholder="Rua" required {...register('address')} />
              <Input placeholder="Número" required {...register('number')} />
              <Input
                placeholder="Complemento"
                info="Opcional"
                {...register('complement')}
              />
              <Input
                placeholder="Bairro"
                required
                {...register('neighborhood')}
              />
              <Input placeholder="Cidade" required {...register('city')} />
              <Input placeholder="UF" required {...register('state')} />
            </AddressForm>
          </div>

          <div>
            <PaymentInfo>
              <CurrencyDollar size={22} />

              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentInfo>
            <PaymentForm>
              <div>
                <input
                  type="radio"
                  id="credit"
                  value="credit"
                  required
                  {...register('payment')}
                />
                <label htmlFor="credit">
                  <CreditCard size={16} />
                  Cartão de Crédito
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="debit"
                  value="debit"
                  required
                  {...register('payment')}
                />
                <label htmlFor="debit">
                  <Bank size={16} />
                  Cartão de Débito
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  required
                  {...register('payment')}
                />
                <label htmlFor="cash">
                  <Money size={16} />
                  Dinheiro
                </label>
              </div>
            </PaymentForm>
          </div>
        </OrderSection>

        <ResumeSection>
          <h2>Cafés selecionados</h2>

          <div>
            {!isEmptyCart && (
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <CoffeeCard data={item} />
                  </li>
                ))}
              </ul>
            )}

            <ResumeTotal>
              <div>
                <span>Total de itens</span>
                <span>R$ {formattedSubtotal}</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>R$ {formattedFreightTotal}</span>
              </div>

              <div>
                <b>Total</b>
                <b>R$ {formattedTotal}</b>
              </div>
            </ResumeTotal>

            <button type="submit" disabled={isEmptyCart}>
              Confirmar Pedido
            </button>
          </div>
        </ResumeSection>
      </form>
    </CheckoutContainer>
  )
}
