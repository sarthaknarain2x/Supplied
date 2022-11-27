import { useNavigate } from "react-router-dom";
import './donate.scss';

function Donate({setModal}){
    const history = useNavigate();

    return(
        <div className="donatePopup">
                <h1>Donate Here!</h1>
                <div className="firstToDisplay">
                    <button className="ListingDonatePage" onClick={()=>{history('/listings')}}>Donate to Listings!</button>
                    <button className="DonateWebsitePage" onClick={()=>{history('/donate')}}>Donate to Website!</button>
                </div>
                <div className="buffer"></div>
                <div className="cancelDonate">
                    <button className="donatePageButtonCancel" onClick={()=>{setModal(false)}}>Cancel</button>
                </div>
        </div>
    )
}

export default Donate;