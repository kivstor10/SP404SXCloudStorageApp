import LoadoutMenu from "../Components/LoadoutMenu";
import Navbar from "../Components/Navbar";


const LandingPage = () =>{
    return(
        <dir className="landingPage">
            <Navbar />
            <h1>MY <b>SP</b>CLOUD</h1>
            <LoadoutMenu />
        </dir>
    )
}
export default LandingPage;