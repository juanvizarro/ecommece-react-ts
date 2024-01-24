import './Product.css'
import type { IProduct } from "../../../interfaces/ecommerce/IProduct"

interface Props {
    product: IProduct
}

function Product({ product }: Props){
    return (
        <div key={product.id} className="product">
            <img className="product-img" src={product.thumbnail} alt={product.title} />
            <div className='flex justify-between'>
                <span className="font-bold">{product.title}</span>
                <span>${product.price}</span>
            </div>
        </div>
    )
}

export default Product