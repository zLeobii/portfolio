import React, { Component } from 'react';
import './Projects.css';
import githubcode from '../Images/projectgithub.png';
import githubcode2 from '../Images/github2active.png';
import demo from '../Images/external-link.png';
import demo2 from '../Images/external-linkactive.png';

class Projects extends Component {
    render() {
        return (
            <div class="projects" id="projects">
                <div class="projectcopy">
                    <h2>My Recent Work</h2>
                    <p>Here are a few past design projects I've worked on.</p>
                </div>
                <div class="jobcards">
                    <div class="jobcard">
                        <div class="jobimage1"></div>
                        <div class="jobcardcopy">
                            <div class="cardcopy">
                                <h5>My portfolio</h5>
                                <p>Isn't it goofy to put your portfolio as a project in your portfolio? Yes, but until I don't have anything, I'll keep this as showcase.</p>
                            </div>
                            <div class="cardlinks">
                                <a href="https://github.com/zLeobii/portfolio-real" rel="noreferrer" target="_blank">
                                    <div class="ongithub">
                                        <div class="link1"><h4 class="moment1">Code</h4></div>
                                        <div class="link2"><img src={githubcode} alt="githubcode" id="github"/><img src={githubcode2} alt="linkedinn" class="topimg1" /></div>
                                    </div>
                                </a>
                                <a href="https://leobaratieri.com" rel="noreferrer" target="_blank">
                                    <div class="livedemo">
                                        <div class="link1"><h4 class="moment2">Live Demo</h4></div>
                                        <div class="link2"><img src={demo} alt="livedemo" id="demo"/><img src={demo2} alt="linkedinn" class="topimg2" /></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;