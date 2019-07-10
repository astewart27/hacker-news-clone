import React from 'react';
import Logo from '../images/hn-logo.png';

const Header = () => (
    <div className="header-component">
        <header>
            <div className="header-content">
                <span><img src={Logo} alt="Hacker News"/></span>
            </div>
        </header>
    </div>
);

export default Header;