import './AddProduct.css'
import upload_area from '../../assets/upload_icon.png'

const AddProduct = () => {
  return (
    <div className='add-product'>
        <div className='addproduct-itemfield'>
          <p>Product title</p>
          <input type='text' name='name' placeholder='Type here'/>
        </div>

        <div className='addproduct-price'>
          <div className='addproduct-itemfield'>
            <p>Price</p>
            <input type='text' name='price' placeholder='Type here'/>
          </div>
        </div>

        <div className='addproduct-itemfield'>
          <p>Product Category</p>
          <select name='category' className='add-product-selector'>
            <option value="sarees">Sarees</option>
            <option value="lehangas">Lehangas</option>
            <option value="suits">Suits</option>
            <option value="partywear">PartyWear</option>
          </select>
        </div>
        <div className='addproduct-itemfield'>
          <label htmlFor='file-input'>
            <img src={upload_area} className='addproduct-thumbnail-image'/>
          </label>
          <input type='file' name='image' id='file-input' hidden/>
        </div>
        <button className='addproduct-btn'>ADD</button>

    </div>
  )
}

export default AddProduct