import React, { Component } from 'react';
import './partners.css';
import Blastxlogo from '../media/partnersLogo/blastxlogo.png';
import Crex24 from '../media/partnersLogo/crex24.png';
import Cryptobridge from '../media/partnersLogo/cryptobridge.png';
import Cryptobridge1 from '../media/partnersLogo/cryptobridge1.png';
import Cryptocompare from '../media/partnersLogo/cryptocompare.png';
import Flits from '../media/partnersLogo/flits.png';
import Kyd from '../media/partnersLogo/KYD.png';
import Mncn from '../media/partnersLogo/mncn.online.jpg';
import Mno from '../media/partnersLogo/MNO.jpg';
import Primexbt from '../media/partnersLogo/primexbt.png';
import Shardax from '../media/partnersLogo/shardax.jpg';





class Partners extends Component{
        render(){  
    return(
            <div className="partners" id='partners'>
                <h1>Our Partners</h1>
                <h3>MEET ALL THE BENEFITS OF BECOMING OUR CLIENT</h3>
                <div className="images">
                   <img src={Blastxlogo} alt=""/>
                   <img src={Crex24} alt=""/>
                   <img src={Cryptobridge} alt=""/>
                   <img src={Cryptobridge1} alt=""/>
                   <img src={Cryptocompare} alt=""/>
                   <img src={Flits} alt=""/>
                   <img src={Kyd} alt=""/>
                   <img src={Mncn} alt=""/>
                   <img src={Mno} alt=""/>
                   <img src={Primexbt} alt=""/>
                   <img src={Shardax} alt=""/>
                </div>
            </div>
        );
    }
}
export default Partners;