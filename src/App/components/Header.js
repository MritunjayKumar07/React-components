import React from 'react';
import style from '../Header.module.css';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBars, FaWindowClose } from 'react-icons/fa';

export default function Header({ isMenu, setIsMenu }) {
    return (
        <header className={style.header03}>
            <div className={style.logoSide}>
                <img src="https://mritunjaykumar.netlify.app/static/media/logo.2566e6d9e620a91d2af2.png" width={120} height={51} alt='Logo' />
            </div>
            {isMenu ? (<ul className={style.middleMenu}>
                <li><Link className={`${style.li}`} to="#">Home</Link></li>
                <li><Link className={style.li} to="#">Features</Link></li>
                <li><Link className={style.li} to="#">Price</Link></li>
                <li><Link className={style.li} to="#">AboutUs</Link></li>
                {isMenu ? <li className={`${style.inputDesktop} ${style.li}`}><Link className={style.li} to="#">ContactUs</Link></li> : ''}
                {isMenu ? <li className={style.inputDesktop}><><input type='text' placeholder='Search box...' /></></li> : ''}
            </ul>) : ''
            }
            <ul className={style.RightSideMenu}>
                {isMenu ? (<li className={style.inputMobile}><input type='text' placeholder='Search box...' /></li>) : ""}
                {isMenu ? (<li className={`${style.btn} ${style.inputMobile}`}><Link className={`${style.li}`} to="#">ContactUs</Link></li>) : ""}

                <div className={style.icons}><FaUserAlt className={`${style.li} ${style.icon}`} /></div>
                <div className={`${style.icons} ${style.mobile}`}>
                    {isMenu ? (
                        <FaWindowClose onClick={() => setIsMenu(!isMenu)} className={`${style.li} ${style.icon}`} />
                    ) : (
                        <FaBars className={`${style.li} ${style.icon}`} onClick={() => setIsMenu(!isMenu)} />
                    )}
                </div>
            </ul>
        </header>
    );
}
