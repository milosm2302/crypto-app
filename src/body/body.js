import React, { Component } from 'react';
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