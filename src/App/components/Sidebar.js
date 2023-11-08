import React from 'react';
import style from '../Header.module.css';
import { Link } from 'react-router-dom';

const components = [
  'Buttons',
  'Input',
  'Icons',
  'Header',
  'Footer',
  'Cards',
  'Banner',
  'CustomComponents'
];

export default function Sidebar({ closeSideComponents, setCloseSideComponents, handleComponentClick }) {
  return (
    <>
      {closeSideComponents && (
        <section className={style.sideBar}>
          <h3>Components</h3>
          <input type='text' placeholder='Search components...' />
          <ul>
            {components.map((component) => (
              <li key={component}>
                <Link onClick={() => handleComponentClick(component)} to="#" className={style.btn}>
                  {component}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
