interface ITfruit {
  id: string,
  name: string,
  image: string,
  description: string,
  category: string,
  price: number,
  cost: number
}

interface ITcartitem {
  id: string,
  quantity: number
}

type ContextType = {
  cart: ITcartitem[]
  updateCart: (id: string) => void
}
