import PropTypes from 'prop-types'
import ImageIcon from './assets/lady.png'

export default function CaseStudyCards({Title, textdescription, image}){
    return(
        <div className="cards-container">
            <div className="cardimage">
                <img src={image} alt="" />
            </div>
            <div className="cardtitle">
                <div className="titletext">
                    <h2>{Title}</h2>
                </div>

                <div className="descriptext">
                    <p>{textdescription}</p>
                </div>
            </div>
        </div>
    )
}

    CaseStudyCards.propTypes = {
      Title : PropTypes.string.isRequired,
      textdescription : PropTypes.number.isRequired,
      image : PropTypes.string.isRequired,

    }
    
    CaseStudyCards.defaultProps = {
      Title : "AR/Fashion Application",
      textdescription: "Mobile App",
      image : "./assets/tasktrek.jpeg"
    }