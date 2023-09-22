import React, { useState,useEffect,useContext} from 'react';
import './styles.css';
import MyContext from '../context/myContext';
import telegram from '../photos/telegram.png'
import {CircularProgressbar} from 'react-circular-progressbar';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import {Footer} from "./Footer";
import bitbns from '../photos/bitbns.png'
import wazix from '../photos/wazix.png'
import coindcx from '../photos/coindcx.png'
import colodax from '../photos/colodax.png'
import zebpay from '../photos/zebpay.png'
import giotus from '../photos/giotus.png'
import 'react-circular-progressbar/dist/styles.css';

export const MainPage = (props) => {
    const [isLightTheme, setIsLightTheme ] = useState(false);
    const [countDownTimer, setCountDownTimer] = useState(60);
    const [dropdownOpenCurrency, setDropdownOpenCurrency] = useState(false);
    const [dropdownOpenAsset, setDropdownOpenAsset] = useState(false);
    const [currency, setCurrency] = useState("INR");
    const [asset,setAsset]= useState("BTC");
  const toggleCurrency = () => setDropdownOpenCurrency(prevState => !prevState);
  const toggleAsset = () => setDropdownOpenAsset(prevState => !prevState);
  useEffect(() => {
      if(countDownTimer === 0) setCountDownTimer(60);
    countDownTimer > 0 && setTimeout(() => setCountDownTimer(countDownTimer - 1), 1000);
  }, [countDownTimer])
const onThemeButtonClick = () => {
    setIsLightTheme(!isLightTheme)

};
const [data,setData] = useState([{
    "name": "BTC/INR",
    "last": "2285001.0",
    "buy": "2285001.0",
    "sell": "2294084.0",
    "volume": "2.44618",
    "base_unit": "btc"
}]);
const [cryptoData, setCryptoData] = useState([]);
useEffect(() => {
    async function fetchData() {
      try {
    const response = await axios.get('http://localhost:3000/api/data')
  
    //   console.log("asset",asset);
        const findMatchingObject = (data, valueToMatch) => {
            for (var i = 0; i < data.length; i++) {
                const match = data[i]['name'].split('/')[0];
                // console.log(match);
                if (match === valueToMatch) {
                    // console.log(data[i].name);
                    return data[i];
                }
            }
            return null;
        };
        var matchedObject = findMatchingObject(response.data, asset);
        
          console.log("matched data",matchedObject)
          setData(matchedObject)

      } catch (error) {
        
      }
      
    }
    fetchData();
  }, [asset]);

  function calculateDifference(lastPrice, buyPrice) {
    const last = parseFloat(lastPrice);
    const buy = parseFloat(buyPrice);

    if (buy === 0) {
        return "N/A";
    }

    const difference = ((last - buy) / buy) * 100;
    return difference.toFixed(2) + "%";
}

// Function to calculate the savings
function calculateSavings(lastPrice, buyPrice, volume) {
    const last = parseFloat(lastPrice);
    const buy = parseFloat(buyPrice);
    const volumeValue = parseFloat(volume);

    if (buy === 0) {
        return "N/A";
    }

    const savings = (last - buy) * volumeValue;
    return "₹ " + savings.toFixed(3);
}
function roundOff(data){
    const last = parseFloat(data);
    return last.toFixed(3);
}
function calculateAverageNetPrice(lastPrice, buyPrice, commissionPercentage) {
    const last = parseFloat(lastPrice);
    const buy = parseFloat(buyPrice);
    const commission = parseFloat(commissionPercentage) / 100;

    if (buy === 0) {
        return "N/A";
    }

    const netPrice = ((last + buy) / 2) + buy*commission;
    return "₹ " + netPrice.toFixed(2);
}
    return (
        <React.Fragment>
            <div className={("theme-") + (isLightTheme ? "light" : "dark")}>
            <div style={{padding: "20px 30px 0px"}}>
            <div className=" align-items-center justify-content-sm-center row">
                <div className="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                  
                        <div className="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                           <h1 className="fs-1" style={{color:'#3dc6c1'}}>Binance Info</h1> 
                        </div>
            
                    
                </div>
                <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
<div className="btn-group">
 <ButtonDropdown isOpen={dropdownOpenCurrency} toggle={toggleCurrency} >
      <DropdownToggle caret className={"header-button"}>
          {currency}
      </DropdownToggle>
      <DropdownMenu >
        <DropdownItem value="INR" onClick={(e) => setCurrency(e.target.value)}>INR</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>

<div className="btn-group">
<ButtonDropdown isOpen={dropdownOpenAsset} toggle={toggleAsset} >
   <DropdownToggle caret className={"header-button"}>
     {asset}
   </DropdownToggle>
   <DropdownMenu>

        <DropdownItem value="BTC" onClick={(e) => setAsset(e.target.value)}>BTC</DropdownItem>
        <DropdownItem value="XRP" onClick={(e) => setAsset(e.target.value)}>XRP</DropdownItem>
        <DropdownItem value="ETH" onClick={(e) => setAsset(e.target.value)}>ETH</DropdownItem>
        <DropdownItem value="TRX" onClick={(e) => setAsset(e.target.value)}>TRX</DropdownItem>
        <DropdownItem value="EOS" onClick={(e) => setAsset(e.target.value)}>EOS</DropdownItem>
        <DropdownItem value="ZIL" onClick={(e) => setAsset(e.target.value)}>ZIL</DropdownItem>
        <DropdownItem value="BAT" onClick={(e) => setAsset(e.target.value)}>BAT</DropdownItem>
        <DropdownItem value="ZRX" onClick={(e) => setAsset(e.target.value)}>ZRX</DropdownItem>
        <DropdownItem value="REQ" onClick={(e) => setAsset(e.target.value)}>REQ</DropdownItem>
        <DropdownItem value="NULS" onClick={(e) => setAsset(e.target.value)}>NULS</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>
<div className="btn-group">
                    <a target="_blank" href="/" type="button" aria-haspopup="true" aria-expanded="false" className="header-button btn btn-secondary">BUY {asset}</a>
</div>
                </div>
                <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <div className="d-inline-flex flex-wrap align-items-center justify-content-center">
                                <div className="progress-bar-wrapper">
                                    <CircularProgressbar  value={parseFloat(countDownTimer * 100 / 60.0)} text={`${countDownTimer}`}/>
                                </div>
                        <a className="color-white" href="/connect/telegram">
                            <div className="d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white">
                                <div className="d-inline-block">
                                    <img src={telegram} className="telegram-logo" alt=''/></div>
                                <div className="text-nowrap d-inline-block color-white">Connect Telegram</div>
                            </div>
                        </a>
                            <div className="margin-10 d-inline-block">
                                <label className="switch">
                                    <input type="checkbox" checked={!isLightTheme} onChange={onThemeButtonClick} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                    </div>
                </div>
            </div>
        </div><div className="Container-fluid " style={{ padding: "0px 30px" }}>
                <div className="d-flex justify-content-around align-items-center average-header" style={{ padding: "10px 0px" }}>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">{calculateDifference(data['last']- data['last']*0.001, data['buy']- data['buy']*0.002)}</div>
                        <div className="average-header-subHeading">5 Mins</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">{calculateDifference(data['last']- data['last']*0.005, data['buy']- data['buy']*0.015)}</div>
                        <div className="average-header-subHeading">1 Hour</div>
                    </div>
                    <div style={{ "max-width": "40%" }}>
                        <div className="text-center font-32 average-block">
                            <div className="average-subText">
                                <span className="subText-heading">Best Price to Trade</span>
                            </div>
                            <div className="average-heading" style={{ "padding-bottom": "10px" }}>{calculateAverageNetPrice(data['last'], data['buy'], 0.005) }</div>
                            <div className="average-subText">`Average {asset}/INR net price including commission`</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">{calculateDifference(data['last']- data['last']*0.005, data['buy']- data['buy']*0.037)}</div>
                        <div className="average-header-subHeading">1 Day</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">{calculateDifference(data['last']- data['last']*0.005, data['buy']- data['buy']*0.055)}</div>
                        <div className="average-header-subHeading">7 Days</div>
                    </div>
                </div>

            </div>
            <div className="fiat-crypto-table table-responsive" style={{ margin: "0px auto" }}>
                <table className="table table-borderless text-center">
                    <thead>
                        <tr>
                            <th>
                                <h4><span className="pointer">#</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Platform</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Last Traded Price</span></h4>
                            </th>
                            <th><h4><span className="pointer">Buy / Sell Price</span></h4>
                            </th>
                            <th><h4><span className="pointer">Difference</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Savings</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle"><h4 className="table-text">1</h4></td>
                            <td className="align-middle"><a target="_blank" href="/">
                                <h4 className="table-text">
                                    <img src={wazix} className="exchange-logo" alt=''></img> <span className="exchange-name ">WazirX</span></h4>
                            </a></td><td className="align-middle"><h4 className="table-text">₹ {data['last']}</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ {data['buy']} / ₹ {data['sell']}</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">{calculateDifference(data['last'], data['buy'])}</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ {calculateSavings(data['last'], data['buy'], data['volume'])}</h4></td>
                        </tr>
                        <tr><td className="align-middle"><h4 className="table-text">2</h4></td>
                            <td className="align-middle"><a  href="https://bit.ly/2BJxccc" >
                                <h4 className="table-text">
                                    <img src={bitbns} className="exchange-logo" alt=''/>
                                    <span className="exchange-name ">Bitbns</span>
                                </h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹  {roundOff(data['last']- data['last']*0.05)}</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹{roundOff(data['buy']- data['buy']*0.05)} / ₹ {roundOff(data['sell']- data['sell']*0.05)}</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">{calculateDifference(data['last']- data['last']*0.08, data['buy']- data['buy']*0.15)}</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲  {calculateSavings(data['last']- data['last']*0.05, data['buy']- data['buy']*0.05, data['volume'])}</h4></td>
                        </tr>
                        {/* <tr>
                            <td className="align-middle"><h4 className="table-text">3</h4></td>
                            <td className="align-middle"><a target="_blank" href=" "><h4 className="table-text">
                                <img src={giotus} className="exchange-logo" alt=''/><span className="exchange-name ">Giotus</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,79,000</h4></td><td className="align-middle"><h4 className="table-text"><span>₹ 1,78,010 / ₹ 1,79,000</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">6.97 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 11,665</h4></td>
                        </tr> */}
                        <tr>
                            <td className="align-middle"><h4 className="table-text">3</h4></td>
                            <td className="align-middle"><a target="_blank" href=" "><h4 className="table-text">
                                <img src={colodax} className="exchange-logo" alt=''/><span className="exchange-name ">Colodax</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹{roundOff(data['last']- data['last']*0.08)}</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹{roundOff(data['buy']- data['buy']*0.05)} / ₹ {roundOff(data['sell']- data['sell']*0.15)}</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-red">{calculateDifference(data['last']- data['last']*0.08, data['buy']- data['buy']*0.05)}</h4></td>
                            <td className="align-middle"><h4 className="table-text color-red">▼ {calculateSavings(data['last']- data['last']*0.055, data['buy']- data['buy']*0.0555, data['volume'])}</h4></td>
                        </tr>
                        {/* <tr>
                            <td className="align-middle"><h4 className="table-text">4</h4></td>
                            <td className="align-middle"><a target="_blank" href="/"><h4 className="table-text">
                                <img src={zebpay} className="exchange-logo" alt=''/><span className="exchange-name">Zebpay</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹ 1,82,000</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹ 1,82,200 / ₹ 1,82,000</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">8.76 %</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ ₹ 14,665</h4></td>
                        </tr> */}
                        <tr>
                            <td className="align-middle"><h4 className="table-text">4</h4></td>
                            <td className="align-middle"><a target="_blank" href=" "><h4 className="table-text">
                                <img src={coindcx} className="exchange-logo" alt=''/><span className="exchange-name">CoinDCX</span></h4></a></td>
                            <td className="align-middle"><h4 className="table-text">₹  {roundOff(data['last']- data['last']*0.05)}</h4></td>
                            <td className="align-middle"><h4 className="table-text"><span>₹{roundOff(data['buy']- data['buy']*0.05)} / ₹ {roundOff(data['sell']- data['sell']*0.049)}</span></h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">{calculateDifference(data['last']- data['last']*0.05, data['buy']- data['buy']*0.07)}</h4></td>
                            <td className="align-middle"><h4 className="table-text color-green">▲ {calculateSavings(data['last']- data['last']*0.053, data['buy']- data['buy']*0.053, data['volume'])}</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          
            <Footer />
        <div className="d-flex justify-content-center" style={{border:"solid 1px #191d28","background-color":"#191d28",position:"fixed",left:"0","align-items":"center",width:"100vw",height:"47px",bottom:"0","z-index":"8"}}><button className="add-button btn btn-outline-info" style={{display: "block"}}>Add hodlinfo to home screen</button></div>
        </div>

        </React.Fragment>
    )
};