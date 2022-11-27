import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './uploadlisting.scss'
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import axios from 'axios';

function UploadListing({data,setData}){
    const [amount, setAmount] = useState(5);
    const [name,setName] = useState('');
    const [clickedFive,setClickedFive] = useState(true);
    const [clickedTwenty,setClickedTwenty] = useState(false);
    const [clickedFourty,setClickedFourty] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [book, setBook] = useState('');
    const [UCID,setUCID] = useState();

    let id = searchParams.get('id');
    const history = useNavigate();

    const handleSetClicked = (setState,setOther1,setOther2) =>{
        setState(true);
        setOther1(false);
        setOther2(false);
    }
    const searchbook = (title) =>{
        const url = `https://api.itbook.store/1.0/search/${title}`;
        axios.get(url).then(response => {
            return response.data;
          });
    }

    const getIndex = (data) =>{
       for(let i=0;i<data.length;i=i+1){
        console.log(data[i].id)
        if(data[i].id===parseInt(id)){
            return i;
        }
       }
       return null;
    }

    const addListings = async (body) => {
        console.log(body);
        await fetch('http://localhost:8000/listings', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((new_list) => {
                setData([...data,new_list]);
                // setTitle('');
                // setBody('');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleUploadListing = async(e) =>{
        e.preventDefault();
        const tmpBook = searchbook(name);
        const bookData = tmpBook?.data?.books;
        if(bookData){
            const tmp = {
                id:data.length+1,
                img:bookData[0].image,
                total:bookData[0].price,
                progress:0,
                description:bookData[0].title
            };
            addListings(tmp);
            history('/');
        }
        else{
            const tmp = {
                id:data.length+1,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlulfEOI_lYMFkw2xeHw8K7nmmJbqMZoRXSqRbLdF&s",
                total:amount,
                progress:0,
                description:name
            };
            addListings(tmp);
            history('/');
        }
    }
    console.log(searchbook('Calc'));
    let percentString;
    const donation = data[getIndex(data)];
    if(donation){
        const percent = (parseFloat(donation.progress)/parseFloat(donation.total))*100;
        percentString = percent.toString().split('.')[0];
    }
    return(
        <div>
            <Header />
            <div className="listingform">
                <div className = "form">
                    <div >
                        <h1>Make a listing.</h1>
                        <form onSubmit={(e)=>{handleUploadListing(e)}}>
                            <input placeholder="Item Name" onChange={(e)=>{setName(e.target.value)}} autoComplete="off"/>
                            <input placeholder="UCID" onChange={(e)=>{setUCID(e.target.value)}} autoComplete="off" type="number" required/>
                            <input placeholder="Requested Price" type="number" value={amount} onChange={(e)=>{
                                setAmount(e.target.value);
                                }}/>
                            <button type="submit">Upload</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UploadListing;