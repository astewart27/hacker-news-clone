import React from 'react';
import Logo from '../images/hn-logo.png';

const Header = () => (
    <div className="header-component">
        <header>
            <div className="header-content">
                <span><img src={Logo} alt="Hacker News"/></span>
                <ul>
                    <li>new</li>
                    <li>past</li>
                    <li>comments</li>
                    <li>ask</li>
                    <li>show</li>
                    <li>jobs</li>
                    <li>submit</li>
                </ul>
            </div>
        </header>
    </div>
);

export default Header;