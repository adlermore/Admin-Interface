import React, { useLayoutEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import imglogo from '../../assets/img/main_logo.png';
import "uikit/dist/css/uikit.min.css";
import { Twirl as Hamburger } from 'hamburger-react'
import { BiPlus } from 'react-icons/bi';

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    const body = document.getElementById('body');

    const preventDefaultTouch = (event) => {
        event.preventDefault();
    }

    let menuOpen = () => {
        if (!body.classList.contains('menu-opened')) {
            setOpen(true);
            body.classList.add('menu-opened')
        } else {
            setOpen(false);
            body.classList.remove('menu-opened')
        }
    }

    let submenuBtnRender = () => {
        const mobileMenuList = document.querySelectorAll('.submenu');
        mobileMenuList.forEach(element => {
            let sublevelText = element.querySelector('a').text;
            const newDiv = document.createElement('button');
            newDiv.className = 'backBtn icon-down';
            newDiv.textContent = sublevelText;
            newDiv.onclick = prevMenuButton;
            if (!element.classList.contains('createdLink')) {
                element.querySelector('.uk-navbar-dropdown-nav').appendChild(newDiv);
                element.classList.add('createdLink');
            }
        });
    }

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    function ShowWindowDimensions(props) {
        const [width] = useWindowSize();
        if (width <= 991) {
            if (!body.classList.contains('mobile-version')) {
                body.classList.add('mobile-version')
                submenuBtnRender();
            }
        } else {
            body.classList.remove('mobile-version')
        }
    }

    function subMenuOpen(e) {
        e.currentTarget.parentElement.nextElementSibling.classList.add('submenu-open')
    }

    const prevMenuButton = (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove('submenu-open')
    }

    if (window.innerWidth <= 991) {
        submenuBtnRender();
    }
    ShowWindowDimensions();

    return (
        <header className="page_header">
            <div className="custom_container">
                <div className="header_inner">
                    <NavLink onTouchStart={preventDefaultTouch} className="logo__link" to="/">
                        <div className="logo__icon"><img src={imglogo} alt="logo" /></div>
                    </NavLink>
                    <div className={!isOpen ? "navbar_container" : "navbar_container menu-open"}>
                        <div className="navbar_inner" id="navbar_inner">
                            <div className="menu_container">
                                <div className="main_menu">
                                    <nav className="page-nav" data-uk-navbar>
                                        <ul className="uk-navbar-nav">
                                            <li className="submenu">
                                                <span className="link-wrapper">
                                                    <Link to="/AboutUs"> Why OnBoard </Link>
                                                    <BiPlus className="inner_link" onClick={subMenuOpen} />
                                                </span>
                                                <div className="uk-navbar-dropdown ">
                                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                                        <li><Link to="/Terms">Terms</Link></li>
                                                        <li><Link to="/">Why Level 2</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="/#">Services</a></li>
                                            <li className="submenu">
                                                <span className="link-wrapper">
                                                    <Link to="/FindTalent" > Find Talent </Link>
                                                    <BiPlus className="inner_link" onClick={subMenuOpen} />
                                                </span>
                                                <div className="uk-navbar-dropdown ">
                                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                                        <li><Link to="product-listing">Talent Level 2</Link></li>
                                                        <li className="submenu">
                                                            <span className="link-wrapper">
                                                                <a href="/#"> Talent Level 2 </a>
                                                                <BiPlus className="inner_link" onClick={subMenuOpen} />
                                                            </span>
                                                            <div className="uk-navbar-dropdown" uk-dropdown="animation: reveal-left; animate-out: true; duration: 700">
                                                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                    <li><Link to="product-listing">Talent Level 3</Link></li>
                                                                    <li><Link to="product-inner">Talent Level 3</Link></li>
                                                                    <li><Link to="wish-list">Talent Level 3</Link></li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li><Link to="wish-list">Talent Level 2</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="submenu" >
                                                <span className="link-wrapper">
                                                    <a href="/#"> Find work  </a>
                                                    <BiPlus className="inner_link" onClick={subMenuOpen} />
                                                </span>
                                                <div className="uk-navbar-dropdown ">
                                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                                        <li><Link to="login">Find Level 2</Link></li>
                                                        <li><Link to="registration">Find Level 2</Link></li>
                                                        <li><Link to="account">Find Level 2</Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="/#" className="login-button">Log in</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="login_block">
                                    <div className="login_inner">
                                        <Link to="/loginSwitcher" className="signUp-btn">Sign up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Hamburger toggled={isOpen} toggle={menuOpen} />
                </div>
            </div>
        </header>
    )
}

export default Header;