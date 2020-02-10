import React, { Component } from 'react';
import Banner from './banner';
import About from './about';
import Partners from './partners';
import Clients from './clients';
import Services from './services';
import Team from './ourteam.js';
import Gems from './gems.js';



class Body extends Component{
 render(){
return(
    <div>
        <Banner />
        <About />
        <Services />
        <Partners/>
        <Clients/>
        <Gems />
        <Team />
      
        
    </div>

);
}
}
export default Body;