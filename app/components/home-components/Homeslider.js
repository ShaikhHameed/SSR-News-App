'use client';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { useEffect, useState } from 'react';


export default function HomeSlider(){

    const[blogs,setBlogs]= useState([]);

    useEffect( ()=>{
        const getBlogs = async()=>{
            const data = { page: 1 };
            try {
                const response = await fetch('https://sbz.peekshorts.com/api/getnews', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const processBlogs = await response.json();
                setBlogs(processBlogs.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } 
        }
        getBlogs();
    },[])

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
    },[blogs])

    return(
        <>      <h2 className='fs-1 text-center fw-semibold  position-relative'>Featured Stories</h2>
                <div className='home-slider-box'>
                <div className="splide">
                <div className="splide__track">
                    <div className="splide__list">
                        {blogs && blogs.map((blog,index)=>(
                        <div className='splide__slide' key={index} style={{padding:'6px'}}> 
                        <article className=" news-home-box" style={{ background: `linear-gradient(to bottom,#00000063,#00000063), url(${blog.source_img? blog.source_img:'/images/logos/img-404-news.png'})` }}>
                            <div className="news-box position-relative">
                            <div className='news-box-label'><span>Latest Stories</span></div>    
                            <h3>{blog.title}</h3>
                            <h6 style={{opacity:'0.8'}}>Source: {blog.source_name}</h6>
                            </div>
                        </article>
                        </div>    
                        ))}
                    </div>
                </div>
                </div>
                </div>
        </>
    )

}