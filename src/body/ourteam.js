import React, { Component } from 'react';
import './ourTeam.css';
import Twitter from '../media/services/twitter service.jpg';
import Discord from '../media/socials/dis.gif';
import Avatar from '../media/photos/avatar.jpg';

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
                            <img src={Avatar} alt=""/>
                            <h2>Milos</h2>
                        </div>
                    <div className="contact">
                        <div className="discordImg">
                            <img src={Discord} alt=""/><h3>#milosm2302</h3>
                        </div>
                        <div className="twit">
                        <img src={Twitter} alt=""/><h3>#milosm2302</h3>
                         </div>
                     </div>
                     </div> 
            
            
            
                <div className="profile">
                    <div className="image">
                        <img src={Avatar} alt=""/>
                        <h2>Milos</h2>
                    </div>
                    
                    <div className="contact">
                         <div className="discordImg">
                            <img src={Discord} alt=""/><h3>#milosm2302</h3>
                        </div>
                        <div className="twit">
                                <img src={Twitter} alt=""/><h3>#milosm2302</h3>
                        </div>
                     </div>
                     
                 </div> 
            
                <div className="profile">
                    <div className="image">
                        <img src={Avatar} alt=""/>
                        <h2>Milos</h2>
                    </div>
                    <div className="contact">
                         <div className="discordImg">
                            <img src={Discord}  alt=""/> <h3>#milosm2302</h3>
                        </div>
                        <div className="twit">
                        <img src={Twitter} alt=""/> <h3>#milosm2302</h3>
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