import React, { Component } from 'react'; 
import './about.css';
import AboutCircle from '../media/photos/aboutcircle2.png';
import AboutCorner from '../media/photos/aboutcorner2.png';


class About extends Component{
    render(){
        return(
            <div className="about" id='about'>
                <div className="aboutTop">
                    <div className="aboutTxt">
                        <h2>About Crypto Corner</h2>
                        <p>Crypto Corner is founded in May 2018. by three Crypto Entrepreneurs who have a lot of experience in both Traditional and Digital Marketing.
                            The team consists of three graduated marketers and a couple of professional freelancers.
                            That being said, the Crypto Corner team has high knowledge in Marketing Area and a lot of experience with managing the marketing of new/old
                            cryptocurrencies & Start-Ups.

                            Got an idea for a new Cryptocurrency? - We are here to help you execute it!</p>

                    </div>
                    <div className="circle-img">
                        <img src={AboutCircle} alt=""  />
                    </div>
                </div>
                    <div className="aboutBtm">
                    <div className="aboutImg">
                             <img src={AboutCorner} alt=""/>

                         </div>
                         <div className="aboutTxt green" >
                                <h2>Why Choose Us?</h2>
                                <p>
                                    A lot of projects have great ideas, but they are struggling with marketing and consistency, so most of them end up failing.
                                    So even the best ideas can become useless without marketing and proper organization.
                                    Crypto Corner offers numerous & essential Digital Marketing Services. We reach millions of Cryypto enthusiasts all over the world
                                    through our Social Media Accounts.
                                    Our goal is to help all Crypto related projects to get as much exposure as possible to precisely targeted audience.
                                </p>
                        </div>
                        
                    </div>
            </div>
        );
    }
}
export default About;