import { Link } from "react-router-dom"
import LoadoutIcon from '../assets/LoadoutIcon.svg'
import LoadoutOptions from '../assets/LoadoutOptions.svg'

const LoadoutItem = () =>{
    return(
        <li className="active">
            <Link to="/loadout">
                <img src={LoadoutIcon} alt="Add new loadout" />
                Loadout 1
                <img className="OptionsIcon" src={LoadoutOptions} alt="Add new loadout" />
            </Link>
        </li>
    )
}

export default LoadoutItem