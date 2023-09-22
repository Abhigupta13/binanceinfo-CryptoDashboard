import React, { Component } from 'react';
import './styles.css'


export class Footer extends Component {

    render() {
        return (
            <div class="footer">
                <div className="d-flex align-items-center text-center">
                    <div className="footer-text mx-5 fs-6">Copyright © 2023</div>
                    <div className="footer-text mx-5 fs-6">BinanceInfo.com</div>
                    <div className="footer-text mx-5 fs-6">Developed By Abhishek Kumar Gupta</div>
                    <div class="footer-text pointer" style={{ "margin-left": "auto" }}>
                        <a href="mailto:support@hodlinfo.com" class="footer-text-link mx-5 fs-6">Support</a>
                    </div>
                </div>
            </div>
        )
    }
}