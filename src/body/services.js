import React, { Component, useState } from 'react';
import './services.css';
import Btc from '../media/services/btc service.png';
import Community from '../media/services/commu.png';
import Discord from '../media/services/dis.gif';
import Digital from '../media/services/dig.jpg';
import Insta from '../media/services/instagram service.png';
import Steemit from '../media/services/st.jpg';
import Twitter from '../media/services/twitter service.jpg';
import Telegram from '../media/services/Telegram.png';
import YouTube from '../media/services/YouTube service.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';




const Services = ( ) => {

    const [modalOpen, setmodalOpen] = useState(false)
    
        return(
         <div className="services" id='services'>
             <div className="header">
                 <h1>Services</h1>
                 <p>Crypto Corner is using a great combination of different marketing services and content which will attract,
                    engage and transform your followers & community to investors.
                    Our Services will help you to build a brand, get a huge exposure on Twitter & grow Twitter followers, grow your Discord & Telegram members,
                    and all of that with legit Crypto related people who are, afterall, potential investors.</p>
             </div>
            <div className="socials">
                    <div className="community">
                        <div className="socials-header">
                            <img src={Community}  alt=""/>                          
                            <h3>Community Management & Social Media Management:</h3>
                        </div>
                        <div className="socials-text">
                        <p>- We will hire 2 highly experienced Crypto Community Managers that will work on your project in two shifts.<br/>
                            They will successfully manage any Socials you require, since they have a lot of experience behind them working in big institutions such as Celsius.Network & ECD.<br/>
                            The goal of this is to grow the Followers/Members base on a daily level & to increase the community engagement and activity in the chat. (Telegram, Discord)
                         </p>
                        </div>
                        
                    </div> 
                    <div className="twitter">
                    <div className="socials-header">
                    <img src={Twitter}  alt=""/>
                    <h3>Twitter Marketing Campaign:</h3>
                    </div>
                    <div className="socials-text">
                    <p>- Currently our strongest & the best service that we provide is Twitter Package, as our Crypto Influencers, all together, have a reach over 1.75 Million, during the period of 28 days.
                        <br/>
                        The package consists of 5 Crypto Influencers:
                        <ul>
                            <li><a href="https://twitter.com/ArgosCrypto?s=09" target="_blank">@ArgosCrypto (6.800 followers)</a></li>
                            <li><a href="https://twitter.com/CryptoStewiee?s=09"  target="_blank">@CryptoStewiee (5.400)</a></li>
                            <li><a href="https://twitter.com/SirocheCrypto?s=09"  target="_blank"> @SirocheCrypto (3.700)</a></li>
                            <li><a href="https://twitter.com/SkullBCrypto?s=09"  target="_blank"> @SkullBCrypto (3.400)</a></li>
                            <li><a href="https://twitter.com/GoodGuySauron?s=09"  target="_blank"> @GoodGuySauron (3.100)</a></li>
                        </ul>
                        They will Tweet about your project ~90 times per week, combined.
                        Influencers will also Make Giveaways to directly interact with potential investors,
                         the results of the Twitter giveaway are huge.
                        The amount of exposure, new members joining your group, new followers - is huge, since all of them are potential investors.
                        You can see an example of the Twitter Giveaway <span className="span-link"  onClick={() =>setmodalOpen(!modalOpen)}>  <div className = { modalOpen ? 'modal-open': "modal"}>
                             
                                <FontAwesomeIcon icon= { faTimes } style={{cursor:'pointer', padding:'15px', width:'15px', zIndex:'100'}} onClick={() =>setmodalOpen(!modalOpen) } />
                            
                            
                              <a href="https://steemitwallet.com/@milosm2302/transfers" target="_blank">  <img src={Steemit} alt=""/></a>
                        

                        </div>here</span>, usual reach is between 60k and 90k Crypto people.  
                        Also, they will Retweet almost every tweet of the project they promote, and also each other tweets,
                        in order to maximize the reach as much as possible.
                        </p>
                        </div>

                        
                      

                    </div>
                    <div className="dis">
                    <div className="socials-header">
                        <img src={Discord}  alt=""/>
                        <h3>Discord Marketing Campaign:</h3>
                        </div>
                        <div className="socials-text">
                        <p>
                            -Great service if you want to get an exposure to a unique crypto community, and a good tool to grow your Discord, 
                            Telegram & Twitter members/followers.<br/>
                        - Special Introduction (Partnership Announcement)<br/>
                        - Creating a separated channel for your project to post daily updates and important news<br/>
                        - Direct Interaction with potential investors through Bounties, Airdrops & Giveaways.<br/>
                        - Listing under "CryptoCorner Gems" in our discord (If the coin/platform passes our review)
                        </p>
                        </div>
                    </div>
                    <div className="telegram">
                    <div className="socials-header">
                        <img src={Telegram}  alt=""/>
                        <h3>Telegram Marketing Campaign:</h3>
                        </div>
                        <div className="socials-text">
                        <p>
                        - Get exposure to the group of Crypto Enthusiasts who are looking for the new coins to invest.<br/>

                            - Special Introduction (Partnership Announcement)<br/>
                            - We will post important updates from time to time<br/>
                            - Listing under "CryptoCorner Gems" in our Telegram pinned message<br/>
                            - Direct Interaction with potential investors through Bounties, Airdrops & Giveaways.
                        </p>
                        </div>
                    </div>
                    <div className="instagram">
                    <div className="socials-header">
                        <img src={Insta}  alt=""/>
                        <h3>
                        Instagram Marketing Campaign:
                        </h3>
                        </div>
                        <div className="socials-text">
                        <p>
                        - Get exposure to the completely different crypto audience through sponsored posts & stories.<br/>

                        - 1-3 Sponsored Posts with a content of your choice, during the period of one month<br/>
                        - 2-4 Instagram Stories during the period of one month<br/>
                        - Direct Interaction with potential investors through Bounties & Giveaways.
                        </p>
                        </div>

                    </div>
                    <div className="website">
                        <div className="socials-header no-img">
                        <h3>Website Advertising:</h3>
                        </div>
                        <div className="socials-text">
                    <p>
                    - Listing under "Crypto Corner Gems" on our website. (If the coin passes our review)<br/>
                        Crypto Corner Gems are the coins with low-medium market cap with insane potential.
                        - Paid Banners     
                    </p>
                    </div>
                    </div>
                    <div className="bitcoin">
                    <div className="socials-header">
                    <img src={Btc}  alt=""/>
                        <h3>BitcoinTalk Campaign</h3>
                    </div>
                    <div className="socials-text">  
                    <p>
                    - Great way to boost your page visibility.<br/>
                      - 3-7 weekly posts on your BitcoinTalk ann thread. 
                     </p>
                     </div> 
                    </div>
                    <div className="steemit">
                    <div className="socials-header">
                    <img src={Steemit}  alt=""/>
                        <h3>Medium & Steemit High Quality Articles:</h3>
                        </div>
                        <div className="socials-text">
                    <p>
                    - Get a high quality articles about your project, written by highly educated Blockchain developers from Croatia.<br/>
                    - The articles will be posted on CryptoCorner Medium & Steemit and a few Crypto Related Website in order to boost the reach.<br/>
                    - The articles are one of the best tools for promotions, since the content you create never expires    
                     </p>
                     </div>
                    </div>
                    <div className="youtube">
                    <div className="socials-header">
                    <img src={YouTube}  alt=""/>
                        <h3>YouTube Reviews:</h3>
                        </div>
                        <div className="socials-text">
                    <p>
                    - Order a professional YouTube video review of your coin/platform from our partners.<br/>
                    - Get an exposure to the Unique Crypto Audience.<br/>
                    - The Video Reviews are one of the best tools for promotions, since the content you create never expires and can be used continuously.    
                    </p>
                    </div>
                    </div>
                    <div className="digital">
                        <div className="socials-header">
                            <img src={Digital}  alt=""/>
                            <h3>Digital Marketing Services:</h3>
                        </div>
                        <div className="socials-text">
                        <p>
                        - Essential for any project/start-up to stand out from the competition.<br/>

                        - Local SEO<br/>
                        - Google Ads<br/>
                        - Facebook & Instagram Ads<br/>
                        - Twitter Ads<br/>
                        - YouTube Ads<br/>
                        - Banner at our website  
                        </p>
                        </div>
                    </div>
                    <div className="tradition">
                         <div className="socials-header no-img">
                             <h3>Traditional (OldSchool) Marketing:</h3>
                        </div>
                        <div className="socials-text">
                        <p>
                        - Setting up billboards, Banners on famous Crypto Related Websites, Advertisements in Crypto/Tech magazines, Setting up Crypto Conferences/Meet-Ups.<br/>
                            Those are only the few examples of what we can offer   
                        </p>
                        </div>
                    </div>
                    <div className="tracking">
                    <div className="socials-header no-img">
                        <h3>Easy Progress Tracking</h3>
                        </div>
                    <p>
                    -Wondering how you could track our progress? - You dont have to worry!
                    We are creating a Trello board with daily/weekly/mothly tasks, so you could track what are we up to and the work done.
                    You can see the example here.
                    </p>
                    </div>

             </div>
            
            
         </div>
        );

    }

export default Services;