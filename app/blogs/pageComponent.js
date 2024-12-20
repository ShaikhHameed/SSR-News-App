'use client';
import { useEffect, useState } from 'react';
import '../blogs.scss';
import BlogCard from './component/blogcard';
import $ from 'jquery';
import 'jquery-scrollify';
import Parser from 'rss-parser';

export default function BlogPage(){
    
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const fetchRSS = async () => {
            const parser = new Parser({
                customFields: {
                    item: ['media:content', 'enclosure'], // Include media:content and enclosure for images
                },
            });
    
            try {
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
                    'https://feeds.feedburner.com/ndtvnews-people'
                )}`;
                const response = await fetch(proxyUrl);
                const data = await response.json();
                const feed = await parser.parseString(data.contents);
    
                const items = feed.items.map((item) => ({
                    title: item.title,
                    content: item.contentSnippet || item.description || '',
                    image:
                        item['media:content']?.url ||
                        item.enclosure?.url || // Enclosure might contain the image URL
                        'default-image-url.jpg',
                    alt: item.title || 'Blog Image',
                }));
                setBlogs(items);
            } catch (err) {
                console.error('Error fetching RSS feed:', err);
            }
        };
        fetchRSS();
    },[])

    useEffect(()=>{
        $.scrollify({
            section : ".news-cartd-section",
            sectionName : "news-cartd-section",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 50,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: false,
            touchScroll:true,
          });

          
    },[blogs]);

    return(
    <>
        <div className='container'>
            <div className='mx-auto' style={{width:'100%',maxWidth:'550px'}}>

            {blogs.map((blog,index)=>(
            <BlogCard 
                key={index}
                image={blog.image} 
                title={blog.title} 
                alt={blog.alt} 
                content={blog.content} 
            />
        ))}
           
        </div>
        </div>
       
    </>
    );

}