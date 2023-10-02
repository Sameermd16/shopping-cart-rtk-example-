import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

export default function Cart() { 
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)
    const dispatch = useDispatch()

    const removeFromCart = (product) => {
        dispatch(remove(product))
    }

    const cart = cartItems.map((product) => {
        const { image, title, price, description } = product
        return (<section className='col-md-3' key={product.id}>
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt={title} style={{width: '100px', height: '130px'}} />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
               $ {price}
            </p>
            <a href="#" className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(product)}
            >
                remove 
            </a>
            </div>
        </div>
      </section>)
      })

    return (
        <div className='row'>
            {cart}
        </div>
    )
}