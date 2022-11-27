import {React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';
import websiteLogo from '../assets/logo.png';
import Donate from './Donate';
import {AiOutlineSearch,AiOutlineUnorderedList} from 'react-icons/ai';
import {BiDonateHeart} from 'react-icons/bi';

function Header(){
    const history = useNavigate();
    const [modal, setModal] = useState(false);

    return(
        <div className='header'>
            {/* {
                modal ?
                <div className="modalHeader" style={{position:'fixed',top:'30%',left:'40%',zIndex:'5'}}>
                    <Donate setModal={setModal}/>
                </div>
                : null
            } */}
            <div className='logo'>
                <a href = '/'>
                <img src = {websiteLogo} alt=""/>
                </a>
            </div>
            <form className='search' action="/listings">
                <input type="text" id="keyword" name="keyword"/>
                <button type="submit"><AiOutlineSearch size={20}/></button>
            </form>
            <button className='donate' onClick={()=>{history('/donate')}}><BiDonateHeart size={20}/>Donate</button>
            <button className='listings' onClick={()=>{history('/listings')}}><AiOutlineUnorderedList size={20}/>Listings</button>
            {/* <button className="used" onClick={()=>{history('/used')}}>Used</button> */}
        </div>
    )
}

export default Header;