import LogoIcon from './assets/lindagift-logo.svg'
 
 export default function NavBarComponent(){
    return(
        <div className="navbar-container">
            <div className="logocontainer">
                {/* <a href="#home" class="logo"> LindaGift<span> Awo</span></a> */}
                <img src={LogoIcon} alt="logo" />
            </div>

            <i class="bx bx-menu" id="menu-icon"></i>

            <nav class="navbar">
               
                <a href="#about">About</a>
                <a href="#services">Portfolio</a>
                <a href="#projects">Case Studies</a>
                <a href="#contact">Resume</a>
            </nav>

            <button href="#contact" class="gradient-btn">Hello@LindaGift</button>
    
        </div>
    )
 }