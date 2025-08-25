import React from 'react';
import largestBrokerImg from "../../media/images/largestBroker.png";
import pressLogoImg from "../../media/images/pressLogos.png";

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={largestBrokerImg} alt="largestbroker" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 className='mb-3 fs-2'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:</p>
                        <div className="row">
                            <div className="col-6">
                                 <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivativies</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                            </div>
                            <div className="col-6"> <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and govt. Securities</p>
                            </li>
                        </ul></div>
                        </div>
                        <img src={pressLogoImg} alt="presslogo" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;