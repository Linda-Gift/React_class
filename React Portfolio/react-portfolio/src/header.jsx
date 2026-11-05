 export default function NavBarComponent(){
    return(
        <div className="navbar">
            <div className="logocontainer">
                <a href="#home" class="logo"> LindaGift<span> Awo</span></a>
            </div>

            <i class="bx bx-menu" id="menu-icon"></i>

            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>

            <button href="#contact" class="gradient-btn">Contact Me</button>
    
        </div>
    )
 }