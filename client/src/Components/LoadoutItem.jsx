import { Link } from "react-router-dom"
import LoadoutIcon from '../assets/LoadoutIcon.svg'
import LoadoutOptions from '../assets/LoadoutOptions.svg'
import MenuButton from "./MenuButton"

const LoadoutItem = ({active = ""}) =>{
    const handleClick = (event) =>{
        event.stopPropagation();
    }

    return(
        <li className={active}>
            <Link to="/loadout">
                <img src={LoadoutIcon} alt="Add new loadout" />
                Loadout 1
            </Link>
            <div onClick={handleClick}>
                    <MenuButton />
            </div>
        </li>
    )
}

export default LoadoutItem