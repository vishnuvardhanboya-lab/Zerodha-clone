import React from 'react';

import smallCaseImg from '../../media/images/smallcaseLogo.png';
import streakImg from '../../media/images/streakLogo.png';
import sensibullImg from '../../media/images/sensibullLogo.png';
import zerodhaImg from '../../media/images/zerodhaFundhouse.png';
import goldenpiImg from '../../media/images/goldenpiLogo.png';
import dittoImg from '../../media/images/dittoLogo.png';

function Universe() {
    return ( 
        <div className="container ">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className="col-4 p-3 mt-5 ">
          <img src={smallCaseImg} />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
         <div className="col-4 p-3 mt-5 ">
          <img style={{width:"50%"}} src={streakImg} />
          <p className='text-small text-muted'>Algo & strategy platform</p>
        </div>
         <div className="col-4 p-3 mt-5 ">
          <img src={sensibullImg} />
          <p className='text-small text-muted'>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img style={{width:"50%"}} src={zerodhaImg} />
          <p className='text-small text-muted'>Asset management</p>
        </div>
         <div className="col-4 p-3 mt-5 ">
          <img style={{width:"50%"}} src={goldenpiImg} />
          <p className='text-small text-muted'>Bonds trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5 ">
          <img style={{width:"30%"}} src={dittoImg} />
          <p className='text-small text-muted'>Insurance</p>
        </div>
         <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
     );
}

export default Universe;