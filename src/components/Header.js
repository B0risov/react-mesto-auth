import headerLogo from "../images/header-logo.svg";
import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Header(props) {
    const location = useLocation();
    let navBar;

    if (location.pathname === '/signin') {
        navBar = <Link to="/signup" className='header__link'>Регистрация</Link>
    } else if (location.pathname === '/signup') {
        navBar = <Link to="/signin" className='header__link'>Войти</Link>
    } else {
        navBar = <div className='header__container'><p className='header__email'>{props.email}</p><Link to="/signin" onClick={props.signOut} className='header__link'>Выйти</Link></div>
    }

    return (
        <div className="header">
            <img alt="Логотип Mesto Russia" className="header__logo" src={headerLogo}/>
            { navBar }
        </div>
    )
}

export default Header;