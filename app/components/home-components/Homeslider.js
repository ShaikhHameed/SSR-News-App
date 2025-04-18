'use client';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { useEffect } from 'react';


export default function HomeSlider(){

    useEffect(()=>{
        new Splide('.splide', {
            type: 'loop',
            perPage: 3,
            autoplay: true,
            interval: 3000,
            arrows: true,
            pagination: true,
            speed: 1000,
            breakpoints:{
                780:{
                    perPage:1,
                }
            }
          }).mount();
    },[])

    return(
        <>      <h2 className='fs-1 text-center fw-semibold  position-relative'>Featured Stories</h2>
                <div className='home-slider-box'>
                <div className="splide">
                <div className="splide__track">
                    <div className="splide__list">
                    
                        <div className='splide__slide' style={{padding:'6px'}}> 
                        <article className=" news-home-box" style={{ background: 'linear-gradient(to bottom,#00000063,#00000063), url(https://wallpapers.com/images/featured/american-flag-f4iyiwmqk6cuqimy.jpg)' }}>
                            <div className="news-box position-relative">
                            <div className='news-box-label'><span>Currently Trending</span></div>    
                            <h3>Donald Trump's shrill narrative costs US Canadian tourism dollars; travel bookings plummet</h3>
                            <h6 style={{opacity:'0.8'}}>Source: NewYork Times</h6>
                            </div>
                        </article>
                        </div>    
                       
                    </div>
                </div>
                </div>
                </div>
        </>
    )

}