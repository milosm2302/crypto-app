import React,{Component } from 'react';
import './navbar/nav.css';
import '../src/body/form.css';
import Logo from './media/photos/logo.gif';
import Instagram from './media/socials/instagram.png';
import Twitter from './media/socials/twitter.jpg';
import YouTube from './media/socials/YouTube.png';
import Discord from './media/socials/dis.gif';
import Face from './media/socials/face.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';




class Form extends Component{
state = {
  email: {
    recipient: 'milosm2302@gmail.com',
    sender: '',
    subject: '',
    text: ''
  }
}

sendEmail = _ => {
  const { email } = this.state;
  fetch(`${port}/crypto_app?recipient='milosm2302@gmail.com'&sender=${email.sender}&topic=${email.subject}&text=${email.text}`)
    .catch(err => console.error(err))
}

render() {
  const { email } = this.state;

  return (
   <div className='followUs' >
<div className='followLogo'>
 <img src={Logo}  alt=""/>
 <h2>CRYPTO CORNER</h2>
</div>
<div className="followSoc">
  <h2>FOLLOW CRYPTO CORNER</h2>
 
  <div className="followSocImg">
 
<a href="https://www.instagram.com/crypto.corner/" target="_blank"><img src={Instagram} alt=""/></a>
<img src={Twitter}  alt=""/>
<img src={YouTube}  alt=""/>
<a href="https://discord.gg/QrDjXG3 2250" target="_blank" ><img src={Discord}  alt=""/></a>
<img src={Face}  alt=""/>



</div>
</div>
<a href="https://discord.gg/QrDjXG3 2250" target="_blank" className="disc">
<FontAwesomeIcon icon={faSignInAlt} />
<h3>JOIN OUR DISCORD SERVER</h3>
 </a>    
      <div className='contactForm' id="form"> 
          <h2> Apply to become our client </h2>
          <br />
         
          <input value={email.subject} placeholder=" Company/project name "
            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
          <br />
          <textarea value={email.text} placeholder="Official Links"
            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
        <br/>
            <input value={email.sender} placeholder="Contact Email"
            onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
          <br/>
          <button onClick={this.sendEmail} > SEND REQUEST </button>

      </div> 
      
   </div>
  );
}
}

export default Form