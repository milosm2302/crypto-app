import React,{ Component } from 'react';
import './nav.css';
import '../App.css';
import axios from 'axios';


class Crypto extends Component {

    
    constructor(props){
      super(props);
   
      this.state = {
        cryptos:[ ]
      };
      }
      loadData=()=> {
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,STEEM,LTC,ETH,EOS,DASH&tsyms=USD&api_key=f4522a2f842b96bd47a8caf09fdab7fc8a8c30b1631efafe274f501155320d61E')
         .then(res =>{
           const cryptos =res.data.DISPLAY;
           console.log(cryptos);
           this.setState({cryptos: cryptos})
          
   
         })
   
       };
       componentDidMount(){
         this.loadData()
       }
       componentDidUpdate(){
         setTimeout( 
           function()
         {
           this.loadData();
         }
          .bind(this),3000);
       }
     
       
       render(){
      
      
     
        
       return(
        
             <div className='crcont'>
            
            {Object.keys(this.state.cryptos).map((key)=>(
             
              <div className="cryptoCl">
       <li><img src={`https://www.cryptocompare.com/` + this.state.cryptos[key].USD.IMAGEURL} alt=""/> {key} -{this.state.cryptos[key].USD.PRICE}</li>     
       
              </div>
              
            ))}
          
            </div>
         
           );
     }
   }
   
   export default Crypto;