import JsLogo from './assets/JavaScript.svg'
import ReactLogo from './assets/reactimg.svg'
import SlackLogo from './assets/Slack New.svg'
import FigmaLogo from './assets/Figma.svg'
import MaseLogo from './assets/mase.svg'
import NodeLogo from './assets/Node Js.svg'

export default function CardComponent(){

    return(
        <div className="card-section">
            <div className="card-container">
                <div className="leftside-container">
                    <div className="about">
                        <h1>About Me</h1>
                    </div>

                    <div className="about">
                        <h3>A Seasoned Design/Front-End Engineer</h3>
                    </div>

                    <div className="btn">
                        <button>More About Me</button>
                    </div>
                </div>

                <div className="rightside-container">
                    <div className="tools-heading">
                        <h2>Tools I use Daily</h2>
                    </div>

                    <div className="tools-container">
                        <div className="firsttools-container">
                            <div className="tools">
                                <div className="toolsimg">
                                    <img src={JsLogo} alt="Jslogo" />
                                </div>
                                <div className="tool-text">
                                    <p>JavaScript</p>
                                </div>
                            
                            </div>

                            <div className="tools">
                                <div className="toolsimg">
                                    <img src={ReactLogo} alt="reactlogo" />
                                </div>
                                <div className="tool-text">
                                    <p>React</p>
                                </div>
                            </div>
                        </div>

                        <div className="firsttools-container">
                            <div className="tools">
                                <div className="toolsimg">
                                    <img src={FigmaLogo} alt="figmalogo" />
                                </div>
                                <div className="tool-text">
                                    <p>Figma</p>
                                </div>
                            </div>

                            <div className="tools">
                                <div className="toolsimg">
                                    <img src={MaseLogo} alt="maselogo" />
                                </div>
                                <div className="tool-text">
                                    <p>Mase</p>
                                </div>
                            </div>
                        </div>

                        <div className="firsttools-container">
                            <div className="tools">
                                <div className="toolsimg">
                                    <img src={NodeLogo} alt="nodejslogo" />
                                </div>
                                <div className="tool-text">
                                    <p>NodeJS</p>
                                </div>
                            </div>

                            <div className="tools">
                                <div className="toolsimg">
                                    <img src={SlackLogo} alt="slacklogo" />
                                </div>
                                <div className="tool-text">
                                    <p>Slack</p>
                                </div>
                            </div>
                     </div>
                    </div>
                </div>
            </div>

            <div className="card-container2">
                <div className="leftside-container">
                    <div className="about">
                        <h1>UI/UX DESIGN</h1>
                    </div>

                    <div className="about">
                        <h3>Intuitive, user-centered interfaces that evolve to meet complex needs.</h3>
                    </div>

                    <div className="btn">
                        <button>Case Studies</button>
                    </div>
                </div>

                <div className="rightside-container1">
                    <div className="tools-heading1">
                        <img src="./src/assets/frame2.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="card-container3">
                <div className="leftside-container">
                    <div className="about">
                        <h1>Front-End Engineer</h1>
                    </div>

                    <div className="about">
                        <h3>Intuitive, user-centered interfaces that evolve to meet complex needs.</h3>
                    </div>

                    <div className="btn">
                        <button>Portfolio</button>
                    </div>
                </div>

                <div className="rightside-container1">
                    <div className="tools-heading1">
                        <img src="./src/assets/frame2.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="card-container4">
                <div className="leftside-container">
                    <div className="about">
                        <h1>Illustrator</h1>
                    </div>

                    <div className="about">
                        <h3>Intuitive, user-centered interfaces that evolve to meet complex needs.</h3>
                    </div>

                    <div className="btn">
                        <button>Illustrations</button>
                    </div>
                </div>

                <div className="rightside-container1">
                    <div className="tools-heading1">
                        <img src="./src/assets/lady.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}