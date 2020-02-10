import React, { Component } from 'react';
import './partners.css';
import Aaaa from '../media/clientsLogo/123.png';
import Argoneum from '../media/clientsLogo/argoneum.jpg';
import Arion from '../media/clientsLogo/arion.png';
import Bismuth from '../media/clientsLogo/bismuth.png';
import Blastxlogo from '../media/clientsLogo/blastxlogo.png';
import Cato from '../media/clientsLogo/CATO.png';
import Dmme from '../media/clientsLogo/dmme.jpg';
import Fline from '../media/clientsLogo/FLINE.jpg';
import Flits from '../media/clientsLogo/flits.png';
import Harcomia from '../media/clientsLogo/HARCOMIA LOGO.png';
import Klimatas from '../media/clientsLogo/klimatas.jpg';
import Mcpc from '../media/clientsLogo/mcpc.jpg';
import Midas from '../media/clientsLogo/midas.png';
import Oculor from '../media/clientsLogo/oculor.jpg';
import Okcash from '../media/clientsLogo/okcash.jpg';
import Pacglobal from '../media/clientsLogo/pacglobal.jpg';
import Primexbt from '../media/clientsLogo/primexbt.png';
import Scn from '../media/clientsLogo/SCN.jpg';
import Stakecube from '../media/clientsLogo/stakecube.png';
import Trans from '../media/clientsLogo/transcendencelogo.png'



class Clients extends Component {
    render(){

    return(
            <div className="clients" id='cl'>
                <h1>Our Clients</h1>
               <h2>Meet All the benefits of becoming a Crypto Corner Client</h2>
               <h4>Once you buy our services, you will get the special discount on listing fees on numerous Exchanges, Masternode Hostings & Pools, Platforms.</h4>
                <div className="images clinets-img">
                <img src={Aaaa} alt=""/>
                <img src={Argoneum } alt=""/>
                <img src={Arion} alt=""/>
                <img src={Bismuth} alt=""/>
                <img src={Blastxlogo} alt=""/>
                <img src={Cato }alt=""/>
                <img src={Dmme }alt=""/>
                <img src={Fline} alt=""/>
                <img src={Flits} alt=""/>
                <img src={Harcomia} alt=""/>
                <img src={Klimatas} alt=""/>
                <img src={Mcpc} alt=""/>
                <img src={Midas} alt=""/>
                <img src={Oculor} alt=""/>
                <img src={Okcash} alt=""/>
                <img src={Pacglobal} alt=""/>
                <img src={Primexbt} alt=""/>
                <img src={Scn} alt=""/>
                <img src={Stakecube} alt=""/>
                <img src={Trans} alt=""/>
                </div>
            </div>      
    );
    }
}
export default Clients;