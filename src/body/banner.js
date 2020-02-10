import React, { Component } from 'react';
import './body.css';
import Ideas from '../media/photos/ideas.gif';
import '../App.css';

class Banner extends Component{

render(){
    return(
        <div className='wrapper'>
          <img src={Ideas} alt=""/>
        </div>
    )
}
}

export default Banner ;