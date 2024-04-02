import './AddProduct.css'
import upload_area from '../../assets/upload_icon.png'
import { useState } from 'react';

const AddProduct = () => {

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"sarees",
    price:""
  })
  
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }

  const addProduct = async() => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    //Fetching product from /upload in backend
    await fetch('https://backend-sarisway.onrender.com/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data});
  
    //Adding product to addproduct endpoint in backend
    if(responseData.success)
    {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('https://backend-sarisway.onrender.com/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }



  }


  return (
    <div className='add-product'>
        <div className='addproduct-itemfield'>
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'/>
        </div>

        <div className='addproduct-price'>
          <div className='addproduct-itemfield'>
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here'/>
          </div>
        </div>

        <div className='addproduct-itemfield'>
          <p>Product Category</p>
          <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
            <option value="sarees">Sarees</option>
            <option value="lehangas">Lehangas</option>
            <option value="suits">Suits</option>
            <option value="partywear">PartyWear</option>
          </select>
        </div>
        <div className='addproduct-itemfield'>
          <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-image'/>
          </label>
          <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
        </div>
        <button onClick={()=>{addProduct()}} className='addproduct-btn'>ADD</button>

    </div>
  )
}

export default AddProduct