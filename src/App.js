import './App.css';
import React, { useState } from 'react';
import style from './AppCss/Header.module.css'
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBars, FaWindowClose } from 'react-icons/fa';
import { TbComponents } from 'react-icons/tb';


function App() {
  const [isMenu, setIsMenu] = useState(true);
  const [closeSideComponents, setCloseSideComponents] = useState(true)
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
        <main>
          <div className={style.sideMenuBtn}><TbComponents onClick={() => setCloseSideComponents(!closeSideComponents)} className={style.sideBarComponentsIcon} /></div>
          {closeSideComponents ? <section className={style.sideBar}>
            <h3>Components</h3>
            <input type='text' placeholder='Search components...' />
            <ul>
              <li><Link to="#" className={style.btn}>Buttons</Link></li>
              <li><Link to="#" className={style.btn}>Input</Link></li>
              <li><Link to="#" className={style.btn}>Icons</Link></li>
              <li><Link to="#" className={style.btn}>Header</Link></li>
              <li><Link to="#" className={style.btn}>Footer</Link></li>
              <li><Link to="#" className={style.btn}>Cards</Link></li>
              <li><Link to="#" className={style.btn}>Banner</Link></li>
              <li><Link to="#" className={style.btn}>Custome_Components</Link></li>
            </ul>
          </section> : ""}
          <section className={style.main}>
          </section>
        </main>
      </div>

    </>
  );
}

export default App;















// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import Header from './components/Header.js/Header';
// // import Header from './components/Header/Header01/Header';
// // import Profile from './PortfolioContainer/Home/Profile';
// // import Contact from './PortfolioContainer/ContactMe/Contact';
// // import AboutUs from './PortfolioContainer/AboutUs/AboutUs.js';
// // import Service from './PortfolioContainer/Service/index';
// // import Blog from './PortfolioContainer/Blog/Blog';

// function App() {
//   return (
//     <>
//       <div className='App'>
//         <Header />
//         {/* <Header /> */}
//         {/* <Routes>
//         <Route path="/" exact element={<Profile />} />
//         <Route path="contact" exact element={<Contact />} />
//         <Route path="about" exact element={<AboutUs />} />
//         <Route path="service" exact element={<Service />} />
//         <Route path="blog" exact element={<Blog />} />
//       </Routes> */}
//       </div>

//     </>
//   );
// }

// export default App;
