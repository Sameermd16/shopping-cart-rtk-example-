import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { add } from "../store/cartSlice";
import { products } from "../store/thunkSlice";


const Product = () => {
  // const [productsData, setProductsData] = useState([]);
//   console.log(productsData);
    const dispatch = useDispatch()
    const productsData = useSelector((state) => state.product.data)


  useEffect(() => {
    dispatch(products())
    // async function fetchProducts() {
    //   const { data } = await axios.get("https://fakestoreapi.com/products");
    //   // console.log(data)
    //   setProductsData(data);
    // }
    // fetchProducts();
  }, []);
  // console.log(JSON.stringify(productsData))

  const addToCart = (product) => {
    dispatch(add(product))
  }

  const card = productsData.map((product) => {
    const { image, title, price } = product
    return (<section className='col-md-3' key={product.id}>
    <div className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top" alt={title} style={{width: '100px', height: '130px'}} />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
           $ {price}
        </p>
        <a href="#" className="btn btn-primary"
            onClick={() => addToCart(product)}
        >
            add to cart 
        </a> 
        </div>
    </div>
  </section>)
  })

  return (
    <>
        <h1>Product Dashboard</h1>
        <div className="row"> {card} </div>
    </>
  );
};

export default Product;
