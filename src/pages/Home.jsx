import React from 'react'
import BigFeature from "../components/BigFeature";
import Feature from "../components/Feature";
import Nbar from "../components/Nbar";
import Image_data from "../components/data";
import Offer from "../components/Offer";
import Tour from "../components/Tour";
import Offer_data from "../components/offerdata";
import Header from "../components/Header";
import Customers from "../components/Customers";
import HomeFooter from "../components/HomeFooter";
import "../pages-style/home.css"


const nCards = (val) => {
    return (
        <BigFeature
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            price={val.price}
            duration={val.duration}
        />
    );
};

const nOffers = (val) => {
    return (
        <Offer
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            price={val.price}
            desc={val.description}
        />
    );
};

const Home = ({ isLoggedIn }) => {
    return (
        <div className='home'>
            <Nbar isLoggedIn={isLoggedIn}/>
            <Header />
            <Feature />
            <div className="card-section">
                <h1 className="bigfeature-title">
                    Top Destinations
                </h1>
                <div className="fl feature-card">
                    {Image_data.map((val, index) => (
                        <div key={val.id} className="sub-feature-section">
                            {nCards(val)}
                        </div>
                    ))}
                </div>
            </div>
            <div className="offer-section">
                <h1 className="text-center" style={{ marginBottom: "3rem", color: "var(--primary-text-color)" }}>
                    The BEST OFFERS WITH ROOMS
                </h1>
                <div className="fl offer-card">
                    {Offer_data.map((val, index) => (
                        <div key={val.id} className="col-md-5 sub-offer-section">
                            {nOffers(val)}
                        </div>
                    ))}
                </div>
            </div>
            <div className="tour-section">
                <Tour />
            </div>
            <Customers />
            <HomeFooter />
        </div>
    )
}

export default Home
