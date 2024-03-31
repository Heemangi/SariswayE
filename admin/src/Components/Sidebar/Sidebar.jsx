import { Link } from 'react-router-dom'
import './Sidebar.css'
import cart from '../../assets/addcart.jpeg'
import addprod from '../../assets/productadd.jpeg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
            <img src={cart} alt=""/>
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none", color:"black"}}>
        <div className='sidebar-item'>
            <img src={addprod} alt=""/>
            <p>List Product</p>
        </div>
        </Link> 
    </div>
  )
}

export default Sidebar