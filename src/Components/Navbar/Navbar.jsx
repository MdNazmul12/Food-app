import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("Home");
    return (
        <div className='Navbar'>
            <Link to={'/'}><img src={assets.logo} alt="" className="logo" /></Link> 
            <ul className="navbar-menu">
                <Link onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
                <a  to='/' href='#explore-Menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
                <a href='#appDownload' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
                <a href='#footer' onClick={()=>setMenu("Contact US")} className={menu==="Contact US"?"active":""}>Contact US</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link> 
                    <div className="Dot">

                    </div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sing In</button>
            </div>
        </div>
    );
};

export default Navbar;