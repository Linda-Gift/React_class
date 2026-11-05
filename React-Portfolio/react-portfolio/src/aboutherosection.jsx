import DotIcon from './assets/dot.svg'
import DotGrid from './assets/Dot Grid.svg'

export default function AboutSection(){
    return(
        <div className="aboutherosection-container">
            <div className="first-container">
                <div className="design-div">
                    <div className="designheading">
                        <h1>Design</h1>
                    </div>

                    <div className="aboutheading-text">
                        <p>I am a passionate UI/UX designer dedicated to crafting intuitive and visually engaging digital experiences. With a strong eye for detail and a user-centered approach, I specialize in designing interfaces that seamlessly blend functionality with aesthetics. I thrive on turning complex ideas into simple, scalable solutions, ensuring every design decision enhances usability and leaves a lasting impact. Let’s create something extraordinary together!</p>
                    </div>
                </div>

                <div className="dotdiv">
                    <div className="dot">
                        <img src={DotIcon} alt="dot" />
                    </div>

                    <div className="dotgrid">
                        <img src={DotGrid} alt="dotgrid" />
                    </div>
                </div>
            </div>

            <div className="first-container">

                <div className="dotdiv">
                    <div className="dot">
                        <img src={DotIcon} alt="dot" />
                    </div>

                </div>

                <div className="design-div">
                    <div className="designheading">
                        <h1>Engineering</h1>
                    </div>

                    <div className="aboutheading-text">
                        <p>I am Front-end engineer driven by a passion for building dynamic, responsive, and user-friendly web interfaces. With expertise in JavaScript, React, and modern front-end technologies, I bring designs to life with clean, efficient, and scalable code. I thrive at the intersection of creativity and functionality, crafting seamless digital experiences that engage users and deliver real impact. Always learning, always improving—let's build the future, one line of code at a time.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}