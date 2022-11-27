import React from 'react';
import Header from '../Components/Header';
import MissionStatement from '../Components/MissionStatement';
import Footer from '../Components/Footer';


function Home(){
    return(
        <div>
             <Header />
             <div>
                <MissionStatement />
             </div>
             <Footer />
        </div>
    )
}

export default Home;
