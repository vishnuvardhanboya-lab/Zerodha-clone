import React from 'react';
import googleAppImg from '../../media/images/googlePlayBadge.png';
import appStoreImg from '../../media/images/appstoreBadge.png';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
    <div className='container'>
        <div className='row'>
            <div className='col-6 '>
                <img src={imageURL}/>
            </div>
             <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo}>Try Demo</a>
                <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                </div>
                <div className='mt-3'>
                    <a href={googlePlay}><img src={googleAppImg}/></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src={appStoreImg}/></a>
                </div>
                
             </div>
        </div>
    </div>
    );
}

export default LeftSection;