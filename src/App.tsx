import { useMemo, useState, createContext, useContext } from 'react'
import './App.css'
// import BaseButton from './components/ui/BaseButton'
import ProductsList from './components/ecommerce/ProductsList/ProductsList'
import Header from './components/ecommerce/Header/Header'
import { products as initialProducts } from './mocks/products.json'


function App() {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filteredProducts = useMemo(() => products.filter(product => product.price >= filters.minPrice && (product.category === filters.category || filters.category === 'all')), [filters, products])
  // const [count, setCount] = useState(0)
  // const buttons = [
  //   {text: 'button 1', isActive: true, id: 1},
  //   {text: 'button 2', isActive: false, id: 2},
  //   {text: 'button 3', isActive: true, id: 3},
  // ]
  // const doubleCount = useMemo(() => count * 2, [count])

  return (
    <>
      {/* <div className="flex justify-between">
        { buttons.map(button => (
          <BaseButton onClick={() => button.isActive = !button.isActive} text={button.text} isActive={button.isActive} key={button.id}>{button.isActive ? `${button.text} active` : ''}</BaseButton>
        )) }
      </div> */}
      <Header />
      <ProductsList data={filteredProducts} />

    </>
  )
}

export default App
