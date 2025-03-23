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
          }).mount();
    },[])

    return(
        <>      
                <div className='home-slider-box'>
                    <div className='home-slider-overlay'>
                        <img className='w-100' src='/images/misc/bottom.png' />
                    </div>
                    <div className='home-slider-overlay'>
                        <img className='w-100' src='/images/misc/top.png' />
                    </div>
                <div className="splide">
                <div className="splide__track">
                    <div className="splide__list">

                        <div className='splide__slide'> 
                        <article className=" news-home-box" style={{ background: 'linear-gradient(to bottom,#00000063,#00000063), url(https://wallpapers.com/images/featured/american-flag-f4iyiwmqk6cuqimy.jpg)' }}>
                            <div className="news-box">
                            <h3>Donald Trump's shrill narrative costs US Canadian tourism dollars; travel bookings plummet</h3>
                            </div>
                        </article>
                        </div>   
                       
                        <div className='splide__slide'> 
                        <article className=" news-home-box" style={{ background: 'linear-gradient(to bottom,#00000063,#00000063), url(https://wallpapers.com/images/featured/american-flag-f4iyiwmqk6cuqimy.jpg)' }}>
                            <div className="news-box">
                            <h3>Donald Trump's shrill narrative costs US Canadian tourism dollars; travel bookings plummet</h3>
                            </div>
                        </article>
                        </div>   
                       
                        <div className='splide__slide'> 
                        <article className=" news-home-box" style={{ background: 'linear-gradient(to bottom,#00000063,#00000063), url(https://wallpapers.com/images/featured/american-flag-f4iyiwmqk6cuqimy.jpg)' }}>
                            <div className="news-box">
                            <h3>Donald Trump's shrill narrative costs US Canadian tourism dollars; travel bookings plummet</h3>
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