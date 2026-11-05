import Image from './assets/lindagift.svg'

export default function HeroSection(){
    
    return(
        <div className="section">
            <div className="sidetext">
                <div className="heroname">
                    <h1>Hi, It's <span> LindaGift</span></h1>
                </div>

                <div className="heroparagraph">
                    <p>I’m passionate about creating and developing functional, scalable front-end products that offer seamless and engaging user experiences.
                    </p>
                </div>

                <div class="social-icons">
                    <div class="btn-group">
                        <p>Experienced in UI engineering, I craft intuitive, user-centered interfaces that evolve to meet complex needs.</p>
                    
                    </div>

                    <div class="btn-group">
                        <p>I build responsive websites. I collaborate with teams to create scalable, high-performance products</p>
                    </div>
                </div>
    
            </div>

            <div class="home-img">
                <img src={Image} alt="my picture"/>
            </div>
        </div>
    )
}