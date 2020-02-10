import React,{ Component } from 'react';
import './App.css';
import Navbar from './navbar/nav';
import Body from './body/body';
import Form from './form';
import NavPhone from './navbar/navPhone';

import './mediaPhone.css';







class App extends Component {

 
    render(){
     
  
     
    return(
    
      <div>
         <Navbar />  
         <NavPhone />
         <Body />   
         <Form /> 
      </div>
   
        );
  }
}

export default App;
