import React from 'react'
import 'boxicons'
import Logo from 'https://github.com/MritunjayKumar07/portfolio/blob/master/src/Assert/logo.png';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='MO-1'>
            <div className='MenuOne'>
                <Link to="#">
                    <img style={{ width: "180px", height: "70px", marginLeft: "20px", marginTop: "30px" }} src={Logo} alt="Logo" />
                </Link>
                <ul class="menu-bar">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Service</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">AboutMe</Link></li>
                    <li><Link to="#">ContactMe</Link></li>
                </ul>
            </div>
            <div className='MenuOne-mobile'>
                <img style={{ width: "180px", height: "70px", marginLeft: "20px", marginTop: "16px" }} src={Logo} alt="Logo" />
                <input type="checkbox" id="active" />
                <label for="active" class="menu-btn"><span></span></label>
                <div class="wrapper">
                    <ul>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">Service</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">AboutMe</Link></li>
                        <li><Link to="#">ContactMe</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;