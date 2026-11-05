import { Link } from 'react-router-dom'
import DownloadIcon from './assets/Icons/arrow.svg'

export default function FilterComponent({filterNumber, icon}){
    return(
        <Link>
            <div className='filter-container'>
                <div className="filtertext">
                    <p>Filter Applied : {filterNumber}</p>
                </div>

                <div className="dropdown">
                    <img src={icon} alt="" />
                </div>
            </div>
        </Link>
        
        
    )
}