import React, { useState } from 'react'
import { Header } from './Header'
import BasketList from './BasketList'
import GoodsList from './GoodsList'
import { Search } from './Search'
import { goods } from '../data/goods'
import { Container, ThemeProvider } from '@mui/material'
import { theme } from './muiCustomTheme'
import { Sidebar } from './Sidebar'

export type OrderItemType = {
  id: number
  name: string
  price: number
  quantity: number
}

const App = () => {
  const [order, setOrder] = useState<OrderItemType[]>([])
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(goods)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setProducts(goods)
      setSearch('')
      return
    }

    setSearch(e.target.value)
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  const addToOrder = (goodsItem: OrderItemType) => {
    let quantity = 1

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id)

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1

      setOrder((prevOrder) =>
        prevOrder.map((item) => {
          if (item.id !== goodsItem.id) return item

          return {
            ...item,
            quantity,
          }
        })
      )
    } else {
      setOrder((prevOrder) => [
        ...prevOrder,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ])
    }
  }

  const removeFromOrder = (goodsItem: number) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== goodsItem))
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        {/*<Header />*/}
        <Sidebar />
        <Container>
          <Search />
          <GoodsList goods={products} setOrder={addToOrder} />
          <BasketList order={order} setOrder={removeFromOrder} />
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App
