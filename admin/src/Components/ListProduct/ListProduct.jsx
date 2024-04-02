import { useEffect, useState } from 'react';
import './ListProduct.css'
import remove_icon from "../../assets/delete_icon.jpeg"

const ListProduct = () => {

  const [allProducts,setAllProducts] = useState([]);

  //Displaying all product list
  const fetchInfo = async() =>{
    await fetch('https://backend-sarisway.onrender.com/allproducts')
    .then((res)=>res.json())//()
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[]);

  const remove_product = async(id) => {
    await fetch('https://backend-sarisway.onrender.com/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id}),
    })
    await fetchInfo();
  }

  return (
    <div className='listproduct'>
        <h1>All Products List</h1>
        <div className='listproduct-format-main'>
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className='listproduct-allproducts'>
        <hr/>
        {allProducts?.map((product,index)=>{
          return <>
          <div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={remove_icon} alt=""/>
          </div>
          <hr/>
          </>
        })}
        </div>
    </div>
  )
}

export default ListProduct