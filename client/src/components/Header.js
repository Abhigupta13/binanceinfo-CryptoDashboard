import React, { useState,useContext, useEffect} from 'react';

import MyContext from '../context/myContext';
import './styles.css';
import telegram from '../photos/telegram.png'
import {CircularProgressbar} from 'react-circular-progressbar';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export const Header = (props) => {
    const { asset, setAsset } = useContext(MyContext);
    const [dropdownOpenCurrency, setDropdownOpenCurrency] = useState(false);
    const [dropdownOpenAsset, setDropdownOpenAsset] = useState(false);
    const [currency, setCurrency] = useState("INR");
  const toggleCurrency = () => setDropdownOpenCurrency(prevState => !prevState);
  const toggleAsset = () => setDropdownOpenAsset(prevState => !prevState);
    return (
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
                                    <CircularProgressbar  value={parseFloat(props.countDownTimer * 100 / 60.0)} text={`${props.countDownTimer}`}/>
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
                                    <input type="checkbox" checked={!props.isLightTheme} onChange={props.onThemeButtonClick} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
};