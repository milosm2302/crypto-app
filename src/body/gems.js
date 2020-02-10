import React, { Component } from 'react'; 
import './gems.css';
import Primexbt from '../media/clientsLogo/primexbt.png';
import Fls from '../media/gems/fls.png';
import Okcash from '../media/clientsLogo/okcash.jpg';

class Gems extends Component {
    render(){
        return(
            <div className="gems" id="gems"> 
                <div className="head">
                    <h2>What are Crypto Corner Gems?</h2>
                    
                        <p>Crypto Corner Gems (CCG) is the special section where we add small/medium-cap gems that we think have the huge potential in the future.
                            Only the coins/platforms that pass our review and our requirements will be listed here.
                            These are the coins/platform we are personally buying/using & we think will do great in alt season/in the future.
                        </p>
                </div>   
                        <div className="gemHolder ">  
                        <div className="gem">
                            <h3>Flits</h3>
                            <img src={Fls} alt=""/>
                            <p>Flits has an innovative approach to Masternodes Technology with their Decentralized Masternode Hosting Mobile App.
                                Now you can finally deploy your masternode, even if you are not tech savy. Manage your funds 24/7 anywhere you go, from your pocket! You have the private keys, so only you have the access to your funds, there is no 3rd party involved.
                                All of that for just 2.25 $ in Flits or BTC.</p>
                        </div>
                        <div className="gem">
                            <h3>OkCash</h3>
                            <img src={Okcash} alt=""/>
                            <p>OK is an open-source; its design is public, nobody owns or controls Okcash and everyone can take part,
                                it is a hybrid cryptocurrency that evolved into a full Proof of Stake (PoS) system. [Efficient & Energy Friendly]
                                Okcash is a decentralized and fast growing cryptocurrency/movement that was born on Nov 24th 2014. (5 years old)
                                At first OK was mined (PoW-Scrypt) and evolved to be stake-able (PoS-LTSS-Sha256).
                                Okcash is not a security, it never had an ICO, nor any kind of funding rounds.
                                OK is self sustainable and is fully supported by voluntaries (Just like Bitcoin)</p>
                        </div>
                        <div className="gem">
                            <h3>PrimeXBT</h3>
                            <img src={Primexbt} alt=""/>
                            <p>#1 Bitcoin Trading platform for active trading!<br/>
                                Prime XBT allows you to actively trade most popular cryptocurrencies such as Bitcoin, Ethereum, Ripple, Litecoin with 100x leverage!
                                Trade Cryptocurrencies, Stock indexes, Commodities and Forex with a single Bitcoin-based platform.
                                The platform requires no KYC, sign-up and get 50 % bonus on your first deposit:
                                https://go.primexbt.com/click?pid=276&offer_id=12</p>
                        </div>
                  
                </div>
            </div>
        );
    }
}
export default Gems;