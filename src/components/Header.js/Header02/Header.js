import React, { useState } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(true);

    return (
        <div className={style.MO_1}>
            <div className={style.MenuOne}>
                <Link to="/">
                    <img className={style.logo} src="https://mritunjaykumar.netlify.app/static/media/logo.2566e6d9e620a91d2af2.png" alt="Logo" />
                </Link>
                {isToggleOpen && (
                    <ul className={`${style.menu_bar} ${style.menu_bar_mobile}`}>
                        <li><Link className={style.li} to="/">Home</Link></li>
                        <li><Link className={style.li} to="/service">Service</Link></li>
                        <li><Link className={style.li} to="/blog">Blog</Link></li>
                        <li><Link className={style.li} to="/about">AboutMe</Link></li>
                        <li><Link className={style.li} to="/contact">ContactMe</Link></li>
                    </ul>
                )}

                <FaBars className={style.menuToggleBtn} onClick={() => setIsToggleOpen(!isToggleOpen)} />
            </div>
        </div>
    );
}

export default Header;
