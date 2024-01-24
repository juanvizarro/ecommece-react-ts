
import Product from '../Product/Product'
import type { IProduct } from '../../../interfaces/ecommerce/IProduct'
import './ProductsList.css'


interface Props {
    data: IProduct[]
}

function ProductsList({ data }: Props) {
    return (
        <main className='products justify-center w-full items-center grid-cols-3 grid'>
            {
                data.map(product => <Product product={product} />)
            }
        </main>
    )
}

export default ProductsList