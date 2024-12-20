'use client';
import { useEffect, useState } from 'react';
import '../blogs.scss';
import BlogCard from './component/blogcard';
import $ from 'jquery';
import 'jquery-scrollify';
import Parser from 'rss-parser';

export default function BlogPageCopy(){
    
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const fetchRSS = async()=>{
        const parser = new Parser();
        try{
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://feeds.feedburner.com/ndtvnews-people')}`;
            const response = await fetch(proxyUrl);
            const data = await response.json();
            const feed = await parser.parseString(data.contents);
            const items = feed.items.map((item) => ({
                title: item.title,
                content: item.contentSnippet || item.content || '',
                image: item.enclosure?.url || 'default-image-url.jpg',
                alt: item.title || 'Blog Image',
            }));
            setBlogs(items);     

        }catch(err){
            console.log(err);
        }

        }
        fetchRSS();
    },[])

    useEffect(()=>{
        $.scrollify({
            section : ".news-cartd-section",
            sectionName : "news-cartd-section",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: false,
            touchScroll:true,
          });

          
    },[]);

    return(
    <>
        <div className='container'>
            <div className='mx-auto' style={{width:'100%',maxWidth:'550px'}}>
            <BlogCard 
                image={'https://i.ytimg.com/vi/9BNMVDIJKrQ/maxresdefault.jpg'} 
                title={'Elon Musk EVIL??? Heres how'} 
                alt={'Elon MUsK'} 
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt varius nisl, sed eleifend arcu laoreet nec. Nullam non consectetur risus, vel interdum lorem. Sed nec interdum arcu, sit amet posuere eros. Sed suscipit sit amet nunc porttitor volutpat. Proin sodales eget ante non placerat. Nam finibus dui quam, at bibendum metus porta sagittis. Vivamus in neque nunc. Nam et vulputate nisi. Donec nec sapien et tellus molestie euismod. Curabitur hendrerit tempus tortor in egestas. Sed efficitur velit nunc, lacinia tincidunt sapien luctus id. Quisque erat nunc, eleifend a pretium a, posuere ac purus. Sed nec consectetur ligula. Nam in nunc mauris. Phasellus convallis tortor enim, non dictum ex bibendum non.'} 
            />

            <BlogCard 
                image={'https://delmonte-sitefinity-public.s3.amazonaws.com/images/default-source/product-slider-images/delmonte-isolatedimage-seedless-watermelons-988x604df116027-de3d-457e-ac8b-a2eaa26d4cd2.jpg?sfvrsn=b3d47f00_1'} 
                title={'Can Watermolens have Sex??'} 
                alt={'Watermeolen'} 
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt varius nisl, sed eleifend arcu laoreet nec. Nullam non consectetur risus, vel interdum lorem. Sed nec interdum arcu, sit amet posuere eros. Sed suscipit sit amet nunc porttitor volutpat. Proin sodales eget ante non placerat. Nam finibus dui quam, at bibendum metus porta sagittis. Vivamus in neque nunc. Nam et vulputate nisi. Donec nec sapien et tellus molestie euismod. Curabitur hendrerit tempus tortor in egestas. Sed efficitur velit nunc, lacinia tincidunt sapien luctus id. Quisque erat nunc, eleifend a pretium a, posuere ac purus. Sed nec consectetur ligula. Nam in nunc mauris. Phasellus convallis tortor enim, non dictum ex bibendum non.'} 
            />

            <BlogCard 
                image={'https://th-thumbnailer.cdn-si-edu.com/SCGOWoj2esnTgF8K88m38dfYZ1M=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/20120110100144enriched_uranium_web.jpg'} 
                title={'Uranium 235 is Edible. Here are top 6 recipes...'} 
                alt={'Unraniiu'} 
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt varius nisl, sed eleifend arcu laoreet nec. Nullam non consectetur risus, vel interdum lorem. Sed nec interdum arcu, sit amet posuere eros. Sed suscipit sit amet nunc porttitor volutpat. Proin sodales eget ante non placerat. Nam finibus dui quam, at bibendum metus porta sagittis. Vivamus in neque nunc. Nam et vulputate nisi. Donec nec sapien et tellus molestie euismod. Curabitur hendrerit tempus tortor in egestas. Sed efficitur velit nunc, lacinia tincidunt sapien luctus id. Quisque erat nunc, eleifend a pretium a, posuere ac purus. Sed nec consectetur ligula. Nam in nunc mauris. Phasellus convallis tortor enim, non dictum ex bibendum non.'} 
            />

            <BlogCard 
                image={'https://d7hftxdivxxvm.cloudfront.net/?height=658&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxE_Mc-tnI7w4av0DnX5UxA%2Fmain.jpg&width=800'} 
                title={'Physocology For Idiots. New best selling book.'} 
                alt={'Unraniiu'} 
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt varius nisl, sed eleifend arcu laoreet nec. Nullam non consectetur risus, vel interdum lorem. Sed nec interdum arcu, sit amet posuere eros. Sed suscipit sit amet nunc porttitor volutpat. Proin sodales eget ante non placerat. Nam finibus dui quam, at bibendum metus porta sagittis. Vivamus in neque nunc. Nam et vulputate nisi. Donec nec sapien et tellus molestie euismod. Curabitur hendrerit tempus tortor in egestas. Sed efficitur velit nunc, lacinia tincidunt sapien luctus id. Quisque erat nunc, eleifend a pretium a, posuere ac purus. Sed nec consectetur ligula. Nam in nunc mauris. Phasellus convallis tortor enim, non dictum ex bibendum non.'} 
            />
        </div>
        </div>
       
    </>
    );

}