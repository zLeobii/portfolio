import React, { Component } from 'react';
import {Link} from 'react-scroll';
import './Footer.css';
import logo2 from '../Images/logo2.png';
import linkedin2 from '../Images/linkedin2.png';
import linkedin2active from '../Images/linkedinblueactive.png';
import twitter2 from '../Images/twitter2.png';
import twitter2active from '../Images/twitterblueactive.png';
import github2 from '../Images/github2.png';
import github2active from '../Images/githubblueactive.png';
import goup from '../Images/goup.png';
import goup2 from '../Images/goup2.png';

class Footer extends Component {
    render() {
        return (
            <div class="fullfooter">
                <div class="goup">
                    <Link to="hero" spy={true} smooth={true} offset={0} duration={800}><img src={goup2} alt="linkedinn" /><img src={goup} alt="goup" class="topimg" /></Link>
                </div>
                <div class="footer">
                    <a href="https://leobaratieri.com"><img src={logo2} alt="logo" id="logo" /></a>
                    <div class="footerlinks">
                        <a href="https://www.linkedin.com/in/leobaratieri/" rel="noreferrer" target="_blank" class="footerlink"><img src={linkedin2} alt="linkedin" class="topimg" /><img src={linkedin2active} alt="linkedinn" /></a>
                        <a href="https://twitter.com/leobaratieri" rel="noreferrer" target="_blank" class="footerlink"><img src={twitter2} alt="twitter" class="topimg" /><img src={twitter2active} alt="twitter" /></a>
                        <a href="https://github.com/zLeobii" rel="noreferrer" target="_blank" class="footerlink"><img src={github2} alt="github" class="topimg" /><img src={github2active} alt="github" /></a>
                    </div>
                    <p>Handcrafted by me 2023</p>
                </div>
            </div>
        );
    }
}

export default Footer;