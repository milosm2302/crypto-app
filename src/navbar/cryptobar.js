import React,{ Component } from 'react';
import './nav.css';
import '../App.css';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from 'react-slick';




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
            ;
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
      
        const settings = {
          dots:false,
          infinite:true,
          arrows:false,
          speed:500,
          slidesToShow:2.1,
          slidesToScroll:1.2,
          autoplay:true,
          autoplaySpeed:2500,
          pauseOnHover:true,
          slide:true,
          pauseOnFocus:true,
          centerMode: true,
          responsive:[
            {
              breakpoint:1030,
                settings: {
                  slidesToShow:1.8,
                  slidesToScroll:0.5

            }
            

          },
          {
            breakpoint:960,
              settings: {
                slidesToShow:1.6,
                slidesToScroll:0.5

          }
          

        },
        {
          breakpoint:890,
            settings: {
              slidesToShow:2.5,
              slidesToScroll:1

        }
        

      },
      {
        breakpoint:730,
          settings: {
            slidesToShow:2.2,
            slidesToScroll:1,
            pauseOnHover:true,
          slide:true,
          pauseOnFocus:true,

      }
      

    },
    {
      breakpoint:650,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          pauseOnHover:true,
        slide:true,
        pauseOnFocus:true,

    }
    

  },
  {
    breakpoint:590,
      settings: {
        slidesToShow:1.8,
        slidesToScroll:1,
        pauseOnHover:true,
      slide:true,
      pauseOnFocus:true,

  }
  

},
{
  breakpoint:540,
    settings: {
      slidesToShow:1.5,
      slidesToScroll:1,
      pauseOnHover:true,
    slide:true,
    pauseOnFocus:true,

}


},
{
  breakpoint:470,
    settings: {
      slidesToShow:1.2,
      slidesToScroll:0.5,
      pauseOnHover:true,
    slide:true,
    pauseOnFocus:true,

}


},
{
  breakpoint:400,
    settings: {
      slidesToShow:1,
      slidesToScroll:0.5,
      pauseOnHover:true,
    slide:true,
    pauseOnFocus:true,

}


},
{
  breakpoint:340,
    settings: {
      slidesToShow:0.909,
      slidesToScroll:1,
      pauseOnHover:true,
    slide:true,
    centerMode: true,
    pauseOnFocus:true,

}


}

        ]
        
      }
        
       return(
       
        <div style={{
          width:'700px',
          height:'35px',
          display:'flex',
          flexDirection:'column',
          backgroundColor:'white',
          whiteSpace:'nowrap',
          overflow:'hidden',
          justifyContent:'spaceAround',
          cursor:'pointer'
          
          }}>
          <Slick {...settings }>
            {Object.keys(this.state.cryptos).map((key)=>(
          
              
              
                <div style={{
                
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'spaceBetween',
                  boxSizing:'border-box',
                  overflow:'hidden',
                  padding:'0 20px'
                  
                
                }}>
                  <li style={{
                  height:'35px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  fontSize:'12px',
                  
                  
                  }}>
        <img style={{width:'30px', height:'30px'}} src={`https://www.cryptocompare.com/` + this.state.cryptos[key].USD.IMAGEURL} alt=""/> {key} 
        <span  className={(this.state.cryptos[key].USD.CHANGEPCT24HOUR.slice(0, 1) === '-') ? "colorRed" :'colorGreen' }>{this.state.cryptos[key].USD.PRICE}</span>
         
        <span  className={(this.state.cryptos[key].USD.CHANGEPCT24HOUR.slice(0, 1) === '-') ? "colorRed" :'colorGreen' }> change (24h): {this.state.cryptos[key].USD.CHANGEPCT24HOUR} %</span>
          
              </li>
              </div>
          
            ))}
            </Slick>
          
            
            </div>
           );
          
     }
   }
   
   export default Crypto;