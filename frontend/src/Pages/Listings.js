import Card from "../Components/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './listing.scss';
// import listingData from '../database';

function Listings({listingData}){
    let [searchParams, setSearchParams] = useSearchParams();
    const [book, setBook] = useState('');

    let url_params = searchParams.get('keyword');
    const history = useNavigate();
    return(
        <div className="listings">
            <Header />
            <div>
                <p>
                    If there is a university-related item you would like funding for, Supplied! can try to make that happen. Submit 
                    <button className = "uploadBtn" onClick={()=>{history('/upload')}}> this form </button> to upload a listing.
                </p>
            </div>
            <div className="listingCards">
                {
                    listingData.map((item,index)=>{
                        
                        if(url_params == "" || url_params == null)
                        {
                            return <Card key={index} data={item}/>
                        }
                        return null;
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Listings;