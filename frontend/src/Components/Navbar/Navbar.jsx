import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo_transparent.png';
import cart from "../Assets/shopping-bag-icon.png"
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu]= useState("Sarees")
    const { getTotalCartItems } = useContext(ShopContext)
    
    return (
        <div className='navbar'>
            <div className="navlogo">
                <Link to="/"> 
                    <img src={logo} alt=''/>
                </Link>
            </div>        

            <div className='navli'>
                <ul className="navmenu">
                    <li onClick={() => { setMenu("Sarees") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/sarees'>Sarees</Link>{menu==="Sarees"?<hr/>:<></>}
                    </li>
                    <li onClick={() => { setMenu("Lehangas") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/lehangas'>Lehangas</Link> {menu==="Lehangas"?<hr/>:<></>}
                    </li>
                    <li onClick={() => { setMenu("Suits") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/suits'>Suits</Link> {menu==="Suits"?<hr/>:<></>}
                    </li>
                    <li onClick={() => { setMenu("PartWear") }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/partywear'>PartyWear</Link> {menu==="PartWear"?<hr/>:<></>}
                    </li>
                </ul>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Search" className="search-bar" />
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            </div>

            <div className="navright">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={() => {
                        localStorage.removeItem('auth-token');
                        window.location.replace('/')
                    }}>LogOut</button>
                ) : (
                    <Link to='/login'><button>Login</button></Link>
                )}
                <Link to="/cart"> 
                    <img src={cart} alt="Cart" className='cart-icon'/>
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
