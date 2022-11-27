import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './donateform.scss'
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

function DonateForm({data,setData}){
    const [amount, setAmount] = useState(5);
    const [name,setName] = useState('');
    const [clickedFive,setClickedFive] = useState(true);
    const [clickedTwenty,setClickedTwenty] = useState(false);
    const [clickedFourty,setClickedFourty] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    let id = searchParams.get('id');
    const history = useNavigate();

    const handleSetClicked = (setState,setOther1,setOther2) =>{
        setState(true);
        setOther1(false);
        setOther2(false);
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

    const handleSubmitDonation = (e) =>{
        e.preventDefault();
        if(id===null){
            alert('Thanks for the donation!');
            history('/');
        }else{
            const tmp = data;
            const index = getIndex(tmp);
            console.log(index);
            if(index!=null){
                tmp[index].progress = parseInt(tmp[index].progress) + amount;
                if(parseInt(tmp[index].progress)>parseInt(tmp[index].total)){
                    tmp[index].progess = tmp[index].total;
                }
                setData(tmp);
                alert('Thanks for the donation!');
                history('/');
            }else{
                alert('Try Again Please!');
            }
        }
    }

    let percentString;
    const donation = data[getIndex(data)];
    if(donation){
        const percent = (parseFloat(donation.progress)/parseFloat(donation.total))*100;
        percentString = percent.toString().split('.')[0];
    }
    return(
        <div>
            <Header />
            <div className="donateForm">
                <div className="donateImg">
                    <img src="https://media.istockphoto.com/id/1370856587/photo/cropped-portrait-of-an-attractive-young-female-student-using-her-laptop-to-study-outside-on.jpg?b=1&s=170667a&w=0&k=20&c=iugztx7miDp42Pi5UKHaXq5VisV8GG0g1kBJhz1r6R8=" alt="image"/>
                </div>
                <div className = "form">
                    <div >
                        <h1>Make an online donation.</h1>
                        <form onSubmit={(e)=>{handleSubmitDonation(e)}}>
                            <input placeholder="Name(optional)" onChange={(e)=>{setName(e.target.value)}} autoComplete="off"/>
                            <button className={clickedFive ? "clicked" : "notClicked"} 
                                onClick={()=>{
                                    setAmount(5);
                                    handleSetClicked(setClickedFive,setClickedTwenty,setClickedFourty);
                            }} type="button">$5</button>
                            <button className={clickedTwenty ? "clicked" : "notClicked"} onClick={()=>{
                                setAmount(20);
                                handleSetClicked(setClickedTwenty,setClickedFive,setClickedFourty);
                                }} type="button">$20</button>
                            <button className={clickedFourty ? "clicked" : "notClicked"} onClick={()=>{
                                setAmount(40);
                                handleSetClicked(setClickedFourty,setClickedFive,setClickedTwenty);
                                }} type="button">$40</button>
                            <input placeholder="other amount($)" type="number" value={amount} onChange={(e)=>{
                                setAmount(e.target.ariaValueNow);
                                setClickedFive(false);
                                setClickedFourty(false);
                                setClickedTwenty(false);
                                }}/>
                            <button type="submit">Donate</button>
                        </form>
                    </div>
                </div>
                {
                    id!==null ?
                    <div className="donationCardItem">
                    <div className='card'>
                        <div className='itemimg'>
                            <img src = {donation && donation.img}></img>
                        </div>
                        <div className='description'>
                            <h1 className="descriptionCard">
                                {donation &&donation.description}
                            </h1>
                            <h1 className='raised'>
                                ${donation && donation.progress} raised
                            </h1>
                                {/* <h1>
                                • 
                                </h1> */}
                            <hr />
                            <h1 className='goal'>
                                ${donation && donation.total} goal
                            </h1>
                        </div>
                        <div className="progress">
                            <div className='progressbar'>
                                <div class="wrap-circles">
                                    {
                                        percentString ?
                                        <div class="circle" style={{backgroundImage: `conic-gradient(#B5838D ${percentString}%, #FFCDB2 0)`}}>
                                            <div class="inner">{donation && percentString}%</div>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className='progresstext'>
                                <h1>
                                    ${donation.progress} raised
                                </h1>
                                
                                <hr />
                                <h1>
                                ${donation.total} goal
                                </h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    :
                    null
                }
            </div>
            <Footer />
        </div>
    )
}

export default DonateForm;