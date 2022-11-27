import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import DonateForm from './Pages/DonateForm';
import listingData from './database';
import UploadListing from './Pages/UploadListing';
import {useEffect, useState} from 'react';

function App() {
  // function callAPI(endpoint) {
  //   fetch("http://localhost:8000"+endpoint, {method: 'GET'})
  //       .then(res => {return res.json()});
  // }

  const [data,setData] = useState([listingData]);
  
  useEffect(() => {
    fetch("http://localhost:8000/listings", {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err.message);
       });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listings" element={<Listings listingData={data}/>}/>
        <Route path="/donate" element={<DonateForm data={data} setData={setData}/>}/>
        <Route path="/upload" element={<UploadListing data={data} setData={setData}/>}/>
        {/* <Route path="/used" element={<Used />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
