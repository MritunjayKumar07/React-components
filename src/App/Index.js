import React, { useState } from 'react';
import '../App.css';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBars, FaWindowClose } from 'react-icons/fa';
import { TbComponents } from 'react-icons/tb';

import Banner from '../components/Banner/Banner';
import Buttons from '../components/Buttons/Buttons';
import Cards from '../components/Cards/Cards';
import Custom_Components from '../components/Custome_Components/Custome_Components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Icons from '../components/Icons/Icons';
import Input from '../components/Input/Input';

export default function Index() {
    const [isMenu, setIsMenu] = useState(true);
    const [closeSideComponents, setCloseSideComponents] = useState(true);
    const [pagesLoad, setPagesLoad] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const components = ['Buttons', 'Input', 'Icons', 'Header', 'Footer', 'Cards', 'Banner', 'Custom_Components'];

    const loadComponent = (componentName) => {
        switch (componentName) {
            case 'Banner':
                return <Banner />;
            case 'Buttons':
                return <Buttons />;
            case 'Input':
                return <Input />;
            case 'Icons':
                return <Icons />;
            case 'Header':
                return <Header />;
            case 'Footer':
                return <Footer />;
            case 'Cards':
                return <Cards />;
            case 'Custom_Components':
                return <Custom_Components />;
            default:
                return <Buttons />;
        }
    };
    return (
        <>
            <div className='App'>
                <header className={style.header03}>
                    <div className={style.logoSide}>
                        <img src="https://mritunjaykumar.netlify.app/static/media/logo.2566e6d9e620a91d2af2.png" width={120} height={51} alt='Logo' />
                    </div>
                    {isMenu ? (<ul className={style.middleMenu}>
                        <li><Link className={`${style.li}`} to="#">Home</Link></li>
                        <li><Link className={style.li} to="#">Features</Link></li>
                        <li><Link className={style.li} to="#">Price</Link></li>
                        <li><Link className={style.li} to="https://mritunjaykumar.netlify.app/">AboutUs</Link></li>
                        {isMenu ? <li className={`${style.inputDesktop} ${style.li}`}><Link className={style.li} to="https://mritunjaykumar.netlify.app/contact">ContactUs</Link></li> : ''}
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
                <main>
                    <div className={style.sideMenuBtn}><TbComponents onClick={() => setCloseSideComponents(!closeSideComponents)} className={style.sideBarComponentsIcon} /></div>
                    {closeSideComponents ? <section className={style.sideBar}>
                        <h3>Components</h3>
                        <input
                            type='text'
                            placeholder='Search components...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul>
                            {components
                                .filter((component) => component.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((componentName, index) => (
                                    <li key={index}>
                                        <Link onClick={() => setPagesLoad(componentName)} to="#" className={style.btn}>
                                            {componentName}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </section> : null}
                    <section className={style.main}>
                        {pagesLoad ? loadComponent(pagesLoad) : null}
                    </section>
                </main>
            </div>
        </>
    )
}
//  correct and make it advance code and east to understanable , give me updated version