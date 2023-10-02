import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart).length 
    console.log(cartItems)

    const linkStyles = {
        textDecoration: 'none',
        color: 'black'
    }
    const itemsStyles = {
        backgroundColor: '#D3D3D3',
        padding: '10px',
        borderRadius: '50%',
    }

  return (
    <nav className='d-flex justify-content-between p-2'>
        <div className="d-flex gap-3">
            <h3>Redux Toolkit</h3>
            <Link to='/' style={linkStyles} >Products</Link>
        </div>
        <Link to="/cart" style={linkStyles} >Cart <span style={itemsStyles}>{cartItems}</span> </Link>
    </nav>
   
  );
}
 