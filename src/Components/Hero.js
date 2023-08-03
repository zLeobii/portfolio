import React, { Component } from 'react';
import './Hero.css';
import {Link} from 'react-scroll';
import coolimage from '../Images/coolimage.png';
import pfp from '../Images/pfp.png';
import linkedinn from '../Images/linkedin.png';
import linkedinactive from '../Images/linkedinblue.png';
import twitter from '../Images/twitter.png';
import twitteractive from '../Images/twitterblue.png';
import github from '../Images/github.png';
import githubactive from '../Images/githubblue.png';
import gmail from '../Images/mail.png';
import gmailactive from '../Images/gmailblue.png';
import html5 from '../Images/html.png';
import html5active from '../Images/html5active.png';
import css3 from '../Images/css.png';
import css3active from '../Images/css3active.png';
import javascript from '../Images/javascript.png';
import javascriptactive from '../Images/javascriptactive.png';
import react from '../Images/react.png';
import reactactive from '../Images/reactactive.png';
import bootstraps from '../Images/bootstraps.png';
import bootstrapsactive from '../Images/bootstrapsactive.png';
import figma from '../Images/figma.png';
import figmaactive from '../Images/figmaactive.png';

class Hero extends Component {
    render() {
        return (
            <div class="home" id="hero">
                <div class="hero">
                    <div class="main">
                        <img src={pfp} alt="pfp" class="pfp2" />
                        <div class="maincopy">
                            <div class="realmaincopy">
                                <h1>Front-End Developer & Web Designer</h1>
                                <p>I design and code beautifully simple things, and I love what I do.</p>
                            </div>
                            <div class ="linksreal">
                                <a href="https://www.linkedin.com/in/leobaratieri/" rel="noreferrer" target="_blank" class="linkreal"><img src={linkedinactive} alt="linkedin" /><img src={linkedinn} alt="linkedinn" class="topimg" /></a>
                                <a href="https://twitter.com/leobaratieri" rel="noreferrer" target="_blank" class="linkreal"><img src={twitteractive} alt="twitter" /><img src={twitter} alt="twitter" class="topimg" /></a>
                                <a href="https://github.com/zLeobii" rel="noreferrer" target="_blank" class="linkreal"><img src={githubactive} alt="github" /><img src={github} alt="github" class="topimg" /></a>
                                <Link to="contact" smooth={true} offset={50} duration={800} class="linkreal"><img src={gmailactive} alt="gmail" /><img src={gmail} alt="gmail" class="topimg" /></Link>
                            </div>
                            <div class="myskills">
                                <h4>My Skills   |</h4>
                                <div class="skill1">
                                    <div class="profile"><img src={html5} alt="html5" class="skill" /><img src={html5active} alt="html5active" class="namee" /></div>
                                    <div class="profile"><img src={css3} alt="css3" class="skill" /><img src={css3active} alt="css3active" class="namee" /></div>
                                    <div class="profile"><img src={javascript} alt="javascript" class="skill" /><img src={javascriptactive} alt="javascriptactive" class="namee" /></div>
                                </div>
                                <div class="skill2">
                                    <div class="profile"><img src={react} alt="react" class="skill" /><img src={reactactive} alt="reactactive" class="namee" /></div>
                                    <div class="profile"><img src={bootstraps} alt="bootstraps" class="skill" /><img src={bootstrapsactive} alt="bootstrapsactive" class="namee" /></div>
                                    <div class="profile"><img src={figma} alt="figma" class="skill" /><img src={figmaactive} alt="figmaactive" class="namee" /></div>
                                </div>
                                
                                <div class="profilee"><img src={html5} alt="html5" class="skill" /><img src={html5active} alt="html5active" class="namee" /></div>
                                <div class="profilee"><img src={css3} alt="css3" class="skill" /><img src={css3active} alt="css3active" class="namee" /></div>
                                <div class="profilee"><img src={javascript} alt="javascript" class="skill" /><img src={javascriptactive} alt="javascriptactive" class="namee" /></div>
                                <div class="profilee"><img src={react} alt="react" class="skill" /><img src={reactactive} alt="reactactive" class="namee" /></div>
                                <div class="profilee"><img src={bootstraps} alt="bootstraps" class="skill" /><img src={bootstrapsactive} alt="bootstrapsactive" class="namee" /></div>
                                <div class="profilee"><img src={figma} alt="figma" class="skill" /><img src={figmaactive} alt="figmaactive" class="namee" /></div>
                            </div>
                        </div>
                        <img src={pfp} alt="pfp" class="pfp" />
                    </div>
                </div>
                <div class="colimage"><img src={coolimage} alt="coolimage" class="coolimage" /></div>
            </div>
        );
    }
}

export default Hero;