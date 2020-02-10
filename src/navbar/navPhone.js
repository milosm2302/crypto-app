import React,{useState} from 'react';
import '../mediaPhone.css';
import Crypto from './cryptobar';
import Logo from './../media/photos/logo.gif';
import Instagram from './../media/socials/instagram.png';
import Twitter from './../media/socials/twitter.jpg';
import YouTube from './../media/socials/YouTube.png';
import Face from './../media/socials/face.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

const  NavPhone = () =>{
const [navOpen, setNavOpen]= useState(false)
return(
<div>

                   
        <nav className='mobileNav'>
            <Crypto />
        </nav>
        
            <div className="topMobile">
                    <div className="topLogo">
                        <img src={Logo} alt=""/>
                        <h2>Crypto Corner</h2>
                    </div>
                    
                     <FontAwesomeIcon icon={faBars} color="white" height="24px"  onClick={() =>setNavOpen(!navOpen)}/>
                     <div className={ navOpen ? 'active': "togglenav"}>
                         <div className="navLinks">
                            <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={+20}
                                    duration= {1000}
                                    >About Crypto Corner
                            </Link>                               
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
                                    >Crypto Corner Gems</Link>
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
                        </div>

                        <div className='socialLogo'>
                            <img src={Face}alt="" / >
                            <img src={Instagram} alt=""/>
                            <img src={Twitter} alt=""/>
                            <img src={YouTube} alt=""/>
                        </div> 
                     </div>
                     
                 </div>

        <div className={ navOpen ? 'background': " " } onClick={() =>setNavOpen(!navOpen)}></div>        
            
</div>  
        );

}
export default NavPhone;