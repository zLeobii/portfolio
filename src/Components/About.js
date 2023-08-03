import './About.css';
import line from '../Images/line.png';
import line2 from '../Images/line2.png';
import coding from '../Images/codelogo.png';
import design from '../Images/designlogo.png';

const About = (props) => {
    return (
        <div class="about" id="about"> 
            <div class="aboutreal">
                <div class="aboutme">
                    <h2>Hi, I'm Leonardo Baratieri. A passionate Front-end Developer & Web Designer based in Trento, Italy.</h2>
                    <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, BootStraps, and Figma. I thrive in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing custom made Assets. I also love team work and collaborating with cross-functional-teams to produce outstanding web applications.</p>
                </div> 
            </div>
            <div class="skillpage">
                <div class="developer">
                    <div class="topdeveloper">
                        <img src={coding} alt="developerlogo" class="developerlogo" />
                        <h3>Developer</h3>
                        <p class="aboutp">I like to code things from scratch, and love bringing ideas to life in the browser.</p>
                    </div>
                    <div class="middledeveloper">
                        <h6 class="abouth6">Coding languages:</h6>
                        <p class="aboutp">HTML5, CSS3, Javascript, React.js</p>
                    </div>
                    <div class="bottomdeveloper">
                        <h6 class="abouth6">Developer Tools:</h6>
                        <p class="aboutp">Visual Studio Code<br />
                            Sublime Text<br />
                            Bootstrap<br />
                            Github<br />
                            Git Bash</p>
                    </div>
                </div>
                <img src={line} alt="line" class="line"/>
                <img src={line2} alt="line2" class="line2"/>
                <div class="designer">
                    <div class="topdesigner">
                        <img src={design} alt="designerlogo" class="designerlogo" />
                        <h3>Designer</h3>
                        <p class="aboutp">I value simple content structure, clean design patterns and thoughtful interactions.</p>
                    </div>
                    <div class="middledesigner">
                        <h6 class="abouth6">Things I enjoy designing:</h6>
                        <p class="aboutp">UX, UI, Web, Apps</p>
                    </div>
                    <div class="bottomdesigner">
                        <h6 class="abouth6">Designer Tools:</h6>
                        <p class="aboutp">Figma<br />
                        Concepts<br />
                        Photoshop<br />
                        Canva</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;