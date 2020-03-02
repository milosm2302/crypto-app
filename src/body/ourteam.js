import React, { Component } from 'react';
import './ourTeam.css';
import Twitter from '../media/services/twitter service.jpg';
import Discord from '../media/socials/dis.gif';
import Nemanja from '../media/photos/Nemanja.gif';
import Vasilije from '../media/photos/Vasilije.gif';
import Filip from '../media/photos/Filip.gif';

class Team extends Component {
    render(){
        return(
        <div className="team" id="team">
              <div className="header">  
                    <h2>
                        Our Team
                    </h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
                </div> 

                <div className="person">
                    <div className="profile">
                        <div className="image">
                            <img src={Nemanja} alt=""/>
                            
                        </div>
                        <div class="profile-text">
                            <h4>Nemanja, CEO</h4>
                        </div>
                        
                    <div className="contact">
                        <div className="discordImg">
                            <img src={Discord} alt=""/><h4>#Sindjica</h4>
                        </div>
                        <div className="twit">
                        <img src={Twitter} alt=""/><h4>#Sindjica</h4>
                         </div>
                     </div>
                     </div> 
            
            
            
                <div className="profile">
                    <div className="image">
                        <img src={Vasilije} alt=""/>
                       
                    </div>
                    <div class="profile-text">
                        <h4>Vasilije, Co-Owner</h4>
                    </div>
                    
                    <div className="contact">
                         <div className="discordImg">
                            <img src={Discord} alt=""/><h4>#BlackSkull</h4>
                        </div>
                        <div className="twit">
                                <img src={Twitter} alt=""/><h4>#BlackSkull</h4>
                        </div>
                     </div>
                     
                 </div> 
            
                <div className="profile">
                    <div className="image">
                        <img src={Filip} alt=""/>
                       
                    </div>
                    <div class="profile-text">
                        <h4>Phillip, Community & Business Manager</h4>
                    </div>
                    <div className="contact">
                         <div className="discordImg">
                            <img src={Discord}  alt=""/> <h4>#Zagu</h4>
                        </div>
                        <div className="twit">
                        <img src={Twitter} alt=""/> <h4>#Zagu</h4>
                        </div>
                     </div>
                </div>     

           
        </div>
        <div className="stat">
                <div className="statCl">
                    <h4 className="blue">CLIENTS</h4>
                    <span>23</span>         
                 </div>
                <div className="statTw">               
                    <h4 className="green">Twitter Reach<br/> combined over 28 days</h4>
                     
                    <span>500.000+</span>
                </div>
                <div className="statDis">
                    <h4 className="blue">DISCORD</h4>        
                    <span>+700</span>
                </div>  
           <div className="statIns">
              
                <h4 className="green">Instagram</h4>
               
               <span>6.600+</span>
           </div>
        </div>
        </div>
            
           
   
        

        );
    }
}

export default Team;