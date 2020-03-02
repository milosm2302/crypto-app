import React,{ Component } from 'react';
import './App.css';
import Navbar from './navbar/nav';
import Body from './body/body';
import Form from './form';
import NavPhone from './navbar/navPhone';
import Banner from './body/banner';

import './mediaPhone.css';







class App extends Component {

 
    render(){
     
  
     
    return(
    
      <div>
        <header> 
          <Navbar />  
          <NavPhone />
          <Banner />
         </header>
         <main>
          <Body />
        </main>   
         <footer>
          <Form /> 
         </footer>
      </div>
   
        );
  }
}

export default App;
