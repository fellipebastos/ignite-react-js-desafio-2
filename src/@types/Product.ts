export interface ProductProps {
  id: number
  title: string
  description: string
  image: string
  price: number
  tags: string[]
}

export interface ProductCartProps extends ProductProps {
  quantity: number
}
