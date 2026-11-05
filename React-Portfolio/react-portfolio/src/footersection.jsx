import LogoIcon from './assets/white-logo.svg'

export default function FooterSection(){
    return(
        <div className="footer-container">
            <div className="logo-container">
                <img src={LogoIcon} alt="" />
                <div className="name">
                    <h1>LindaGift</h1>
                </div>
            </div>

            <div className="quicklinks">
                <div className="link-text">
                    <h2>Quick Links</h2>
                </div>

                <div className="links">
                    <nav class="navbar">
               
                        <a href="#about">About</a>
                        <a href="#services">Portfolio</a>
                        <a href="#projects">Case Studies</a>
                        <a href="#contact">Resume</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}