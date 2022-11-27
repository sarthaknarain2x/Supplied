import {React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.scss';
import websiteLogo from '../assets/logo.png';
import {AiOutlineSearch,AiOutlineUnorderedList} from 'react-icons/ai';
import {BiDonateHeart} from 'react-icons/bi';

function Footer(){
    const history = useNavigate();
    const [modal, setModal] = useState(false);

    return(
        <div className='footer'>
        <div className='logo-footer'>
            <img src = {websiteLogo} />
        </div>
        <div className='about-us'>
            <h3>About Us</h3>
            <p>Supplied started  an idea that could help all students reach their educational goals.</p>
            <h3>Contact</h3>
            <a href='#'>123-456-7890</a>
            <a href='#'>email@supplied.com</a>
        </div>
        <div class="social-media">
            <h3>Socials</h3>
            <a href='#'>Facebook</a>
            <a href='#'>Instagram</a>
            <a href='#'>Twitter</a>
        </div>
    </div>
    )
}

export default Footer;