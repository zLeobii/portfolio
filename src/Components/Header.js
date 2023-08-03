import React, { useState } from 'react';
import {Link} from 'react-scroll';
import './Header.css';
import Logo from '../Images/logo.png'

function Header() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [mobile_link, setLinkClass] = useState("mobile-link unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked") || setLinkClass("mobile-link clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked") || setLinkClass("mobile-link unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)


    }

    return (
        <div>
            <div class="header">
                <div class="logo">
                    <a href="https://leobaratieri.com"><img src={Logo} alt="pfp" /></a>
                    <a href="https://leobaratieri.com"><h2>leobaratieri.com</h2></a>
                </div>
                <div class="links">
                    <Link to="hero" spy={true} smooth={true} offset={0} duration={700}><h3 class="link">Home</h3></Link>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={700}><h3 class="link">About</h3></Link>
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={700}><h3 class="link">Projects</h3></Link>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={700}><h3 class="link">Contact</h3></Link>
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>
            <div className={menu_class}>
                <Link to="hero" spy={true} smooth={true} offset={0} duration={700}><h3 className={mobile_link} class="mobile-link" onClick={updateMenu} >Home</h3></Link>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={700}><h3 className={mobile_link} class="mobile-link" onClick={updateMenu} >About</h3></Link>
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={700}><h3 className={mobile_link} class="mobile-link" onClick={updateMenu} >Projects</h3></Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={700}><h3 className={mobile_link} class="mobile-link" onClick={updateMenu} >Contact</h3></Link>
            </div>
        </div>
    );
}

export default Header;