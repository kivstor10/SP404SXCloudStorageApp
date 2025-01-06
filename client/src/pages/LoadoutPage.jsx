import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Chevron from "../assets/Chevron.svg"

const LoadoutPage = (id) =>{
    return (
        <div className="LoadoutPageContainer">
            <Navbar />
            <h1><Link to="/">MY <b>SP</b>CLOUD</Link> &gt; LOADOUT 1</h1>
            <div className="ViewLoadout">
                <ol>
                    <li>
                        BANK A 
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK B
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK C
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK D
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK E
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK F
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK G
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK H
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK I
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                    <li>
                        BANK J
                        <img src={Chevron} alt="Chevron Icon" />
                        <hr />
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default LoadoutPage