import React,{Component } from 'react';
import './nav.css';
import Crypto from './cryptobar';
import Logo from './../media/photos/logo.gif';
import Instagram from './../media/socials/instagram.png';
import Twitter from './../media/socials/twitter.jpg';
import YouTube from './../media/socials/YouTube.png';
import Face from './../media/socials/face.png'
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';







class Navbar extends Component {
        render(){
    return(
        <div>
        <div>
         <nav className="pc">
                <div className="top">
                        <div className="topLogo">
                            <img src={Logo} alt=""/>
                            <h2>Crypto Corner</h2>
                        </div>
                                <Crypto />
                        <div className='socialLogo'>
                            <img src={Face}  alt=""/>
                            <img src={Instagram} alt=""/>
                            <img src={Twitter} alt=""/>
                            <img src={YouTube} alt=""/>
                        </div>
                </div>

                <div className="topBar">
                    <span className='logo'>
                    <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={+20}
                            duration= {1000}
                            >About Crypto Corner
                    </Link>                               
                    </span>
                    <ul>
                        
                    <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                            >Services
                    </Link>
                                                  
                          
                    <Link
                            activeClass="active"
                            to="partners"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            >Partners
                    </Link>
                        <Link
                            activeClass="active"
                            to="cl"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            >Clients</Link>
                             <Link
                            activeClass="active"
                            to="gems"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            > Crypto Corner Gems</Link>
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            >Our Team</Link>
                       
                        <Link
                            activeClass="active"
                            to="form"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {1000}
                            >Contact Us</Link>
                        
                    </ul>
                    <div className="contactMail">
                        <FontAwesomeIcon icon={faEnvelope} color="white"/>
                        <h4>contact@cryptocorner.com</h4>
                    </div>
            </div> 
                
        </nav>
        </div>




        
    </div>       
    
   
    );
}
}
 export default Navbar;
