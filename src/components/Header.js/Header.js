import React from 'react';
import Header01 from './Header01/Header';
import Header02 from './Header02/Header';
import Header03 from './Header03/Header';

export default function Header() {
    return (
        <>
            <div style={{marginBottom:'25px', marginTop:'25px'}}>
                <Header01 />
            </div>
            <div style={{marginBottom:'25px', marginTop:'25px'}}>
                <Header02 />
            </div>
            <div style={{marginBottom:'25px', marginTop:'25px'}}>
                <Header03/>
            </div>
        </>
    )
}
