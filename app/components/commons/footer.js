'use client';

import { useState } from "react";

export default function Footer(){
    const [hide,setHide]= useState(true);
    const Year = new Date().getFullYear();


    return(
        <>
            {!hide?
            <div className="footer-banner text-white">
                <p className="text-center m-0">This Website uses cookies for better Experience 
                    <button className="btn btn-dark btn-sm ms-2" onClick={()=>{setHide(true)}}>Okay</button></p>
                {/* <h5 className="text-white">Download our App to Enjoy News.</h5> */}
                {/* <img width={200} src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"/> */}
            </div> 
            :''}

            <div className="footer-gap" style={{height:'40px'}}></div>
            <div className="footer-theme">
                <div className="container"><p className="m-0">© Copyright {Year} | peakshorts</p></div>
            </div>
        </>
    )
}