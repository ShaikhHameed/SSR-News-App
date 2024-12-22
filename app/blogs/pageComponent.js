'use client';
import { useEffect, useState } from 'react';
import '../blogs.scss';
import BlogCard from './component/blogcard';
import $ from 'jquery';
import 'jquery-scrollify';
import Parser from 'rss-parser';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [provider,setProvider] = useState(null);
    useEffect(() => {
        const fetchRSS = async () => {
            const parser = new Parser({
                customFields: {
                    item: ['media:content', 'enclosure'],
                },
            });

            try {
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
                    'https://feeds.feedburner.com/ndtvnews-latest'
                )}`;
                const response = await fetch(proxyUrl);
                const data = await response.json();
                const feed = await parser.parseString(data.contents);
                // console.log(feed);
                setProvider(feed.title);
                const items = feed.items.map((item) => {
                    // Extract image URL from media:content or enclosure
                    const mediaContent = item['media:content'];
                    const imageUrl = mediaContent?.$.url || item.enclosure?.url || 'https://via.placeholder.com/150';

                    return {
                        title: item.title || 'Untitled',
                        content: item.contentSnippet || item.description || '',
                        image: imageUrl,
                        alt: item.title || 'Blog Image',
                        link:item.link,
                    };
                });

                setBlogs(items);
            } catch (err) {
                console.error('Error fetching RSS feed:', err);
            }
        };

        fetchRSS();
    }, []);

    useEffect(() => {
        if (blogs.length > 0) {
            $.scrollify({
                section: '.news-cartd-section',
                sectionName: 'news-cartd-section',
                easing: 'easeOutExpo',
                scrollSpeed: 50,
                setHeights: true,
                overflowScroll: true,
                updateHash: false,
                touchScroll: true,
            });
        }
    }, [blogs]);

    return (
        <div className="container">
            <div className="mx-auto" style={{ width: '100%', maxWidth: '550px' }}>
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        image={blog.image}
                        title={blog.title}
                        alt={blog.alt}
                        content={blog.content}
                        link={blog.link}
                        provider={provider}
                    />
                ))}
            </div>
        </div>
    );
}
