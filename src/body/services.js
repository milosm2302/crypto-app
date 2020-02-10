import React, { Component } from 'react';
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

class Services extends Component{

    render(){
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
                        <img src={Community}  alt=""/>
                        <h2>Community Management & Social Media Management:</h2>
                       
                        <p>- We will hire 2 highly experienced Crypto Community Managers that will work on your project in two shifts.
They will successfully manage any Socials you require, since they have a lot of experience behind them working in big institutions such as Celsius.Network & ECD.
The goal of this is to grow the Followers/Members base on a daily level & to increase the community engagement and activity in the chat. (Telegram, Discord)
</p>
                    </div> 
                    <div className="twitter">
                    <img src={Twitter}  alt=""/>
                    <h2>Twitter Marketing Campaign:</h2>
                    <p>- Currently our strongest & the best service that we provide is Twitter Package, as our Crypto Influencers, all together, have a reach over 1.75 Million, during the period of 28 days.

                        The package consists of 5 Crypto Influencers:
                        @ArgosCrypto (6.800 followers)
                        @CryptoStewiee (5.400)
                        @SirocheCrypto (3.700)
                        @SkullBCrypto (3.400)
                        @GoodGuySauron (3.100)

                        They will Tweet about your project ~90 times per week, combined.
                        Influencers will also Make Giveaways to directly interact with potential investors,
                         the results of the Twitter giveaway are huge.
                        The amount of exposure, new members joining your group, new followers - is huge, since all of them are potential investors.
                        You can see an example of the Twitter Giveaway here, usual reach is between 60k and 90k Crypto people.  
                        Also, they will Retweet almost every tweet of the project they promote, and also each other tweets,
                        in order to maximize the reach as much as possible.
                        </p>

                    </div>
                    <div className="dis">
                        <img src={Discord}  alt=""/>
                        <h2>Discord Marketing Campaign:</h2>
                        <p>
                            -Great service if you want to get an exposure to a unique crypto community, and a good tool to grow your Discord, 
                            Telegram & Twitter members/followers.
                        - Special Introduction (Partnership Announcement)
                        - Creating a separated channel for your project to post daily updates and important news
                        - Direct Interaction with potential investors through Bounties, Airdrops & Giveaways.
                        - Listing under "CryptoCorner Gems" in our discord (If the coin/platform passes our review)
                        </p>
                    </div>
                    <div className="telegram">
                        <img src={Telegram}  alt=""/>
                        <h2>Telegram Marketing Campaign:</h2>
                        <p>
                        - Get exposure to the group of Crypto Enthusiasts who are looking for the new coins to invest.

                            - Special Introduction (Partnership Announcement)
                            - We will post important updates from time to time
                            - Listing under "CryptoCorner Gems" in our Telegram pinned message
                            - Direct Interaction with potential investors through Bounties, Airdrops & Giveaways.
                        </p>

                    </div>
                    <div className="instagram">
                        <img src={Insta}  alt=""/>
                        <h2>
                        Instagram Marketing Campaign:
                        </h2>
                        <p>
                        - Get exposure to the completely different crypto audience through sponsored posts & stories.

                        - 1-3 Sponsored Posts with a content of your choice, during the period of one month
                        - 2-4 Instagram Stories during the period of one month
                        - Direct Interaction with potential investors through Bounties & Giveaways.
                        </p>

                    </div>
                    <div className="website">
                        <h2>Website Advertising:</h2>
                    <p>
                    - Listing under "Crypto Corner Gems" on our website. (If the coin passes our review)
                        Crypto Corner Gems are the coins with low-medium market cap with insane potential.
                        - Paid Banners     
                    </p>
                    </div>
                    <div className="bitcoin">
                    <img src={Btc}  alt=""/>
                        <h2>BitcoinTalk Campaign</h2>
                    <p>
                    - Great way to boost your page visibility.
                      - 3-7 weekly posts on your BitcoinTalk ann thread. 
                     </p>
                    </div>
                    <div className="steemit">
                    <img src={Steemit}  alt=""/>
                        <h2>Medium & Steemit High Quality Articles:</h2>
                    <p>
                    - Get a high quality articles about your project, written by highly educated Blockchain developers from Croatia.
                    - The articles will be posted on CryptoCorner Medium & Steemit and a few Crypto Related Website in order to boost the reach.
                    - The articles are one of the best tools for promotions, since the content you create never expires    
                     </p>
                    </div>
                    <div className="youtube">
                    <img src={YouTube}  alt=""/>
                        <h2>YouTube Reviews:</h2>
                    <p>
                    - Order a professional YouTube video review of your coin/platform from our partners.
                    - Get an exposure to the Unique Crypto Audience.
                    - The Video Reviews are one of the best tools for promotions, since the content you create never expires and can be used continuously.    
                    </p>
                    </div>
                    <div className="digital">
                        <img src={Digital}  alt=""/>
                        <h2>Digital Marketing Services:</h2>
                    <p>
                    - Essential for any project/start-up to stand out from the competition.

                    - Local SEO
                    - Google Ads
                    - Facebook & Instagram Ads
                    - Twitter Ads
                    - YouTube Ads
                    - Banner at our website  
                    </p>
                    </div>
                    <div className="tradition" >
                        <h2>Traditional (OldSchool) Marketing:</h2>
                    <p>
                    - Setting up billboards, Banners on famous Crypto Related Websites, Advertisements in Crypto/Tech magazines, Setting up Crypto Conferences/Meet-Ups.
                        Those are only the few examples of what we can offer   
                    </p>
                    </div>
                    <div className="tracking">
                        <h2>Easy Progress Tracking</h2>
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
}
export default Services;