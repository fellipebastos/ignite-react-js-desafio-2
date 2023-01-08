import { createContext, ReactNode, useState } from 'react'
import { produce } from 'immer'
import { ProductCartProps } from '../@types/Product'

interface CartContextType {
  items: ProductCartProps[]
  total: number
  totalItems: number
  add: (product: ProductCartProps) => void
  remove: (productId: number) => void
  increaseQuantity: (productId: number, quantity?: number) => void
  decreaseQuantity: (productId: number, quantity?: number) => void
  reset: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ProductCartProps[]>([])

  function add(product: ProductCartProps) {
    setItems((state) =>
      produce(state, (draft) => {
        const index = draft.findIndex((item) => item.id === product.id)

        if (index > -1) {
          draft[index].quantity = product.quantity
        } else {
          draft.push({ ...product })
        }
      }),
    )
  }

  function remove(productId: number) {
    setItems((state) =>
      produce(state, (draft) => {
        const index = draft.findIndex((item) => item.id === productId)

        if (index > -1) {
          draft.splice(index, 1)
        }
      }),
    )
  }

  function increaseQuantity(productId: number, quantity = 1) {
    setItems((state) =>
      produce(state, (draft) => {
        const index = draft.findIndex((item) => item.id === productId)

        if (index > -1) {
          draft[index].quantity += quantity
        }
      }),
    )
  }

  function decreaseQuantity(productId: number, quantity = 1) {
    setItems((state) =>
      produce(state, (draft) => {
        const index = draft.findIndex((item) => item.id === productId)
        const currentQuantity = draft[index].quantity

        if (index > -1 && currentQuantity > 1) {
          draft[index].quantity -= quantity
        }
      }),
    )
  }

  function reset() {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const totalItems = items.length

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        totalItems,
        add,
        remove,
        increaseQuantity,
        decreaseQuantity,
        reset,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
