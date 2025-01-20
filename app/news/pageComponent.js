'use client';
import { useEffect, useState } from 'react';
import '../blogs.scss';
import BlogCard from './component/blogcard';
import $ from 'jquery';
import 'jquery-scrollify';
import ShimmerNews from './shimmer';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null); // Store total pages from API
    const [isFetching, setIsFetching] = useState(false);

    const fetchBlogs = async (currentPage) => {
        setLoading(true); // Set loading to true when fetching starts
        const data = { page: currentPage };
        try {
            const response = await fetch('https://sbz.peekshorts.com/api/getnews', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const processBlogs = await response.json();
            setBlogs((prevBlogs) => [...prevBlogs, ...processBlogs.blogs]); // Append new blogs

            // Set total pages if provided by API
            if (processBlogs.total_pages) {
                setTotalPages(processBlogs.total_pages);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false); // Always set loading to false
            setIsFetching(false); // Reset fetching flag
        }
    };

    useEffect(() => {
        fetchBlogs(page);
    }, [page]);

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

        return()=>{
            $.scrollify.destroy();
        }
    }, [blogs]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // Check if the user has scrolled to 90% of the page
            if (
                !isFetching && // Prevent multiple fetches
                (totalPages === null || page < totalPages) && // Ensure page doesn't exceed total pages
                scrollTop + clientHeight >= scrollHeight * 0.9
            ) {
                setIsFetching(true); // Prevent multiple fetches
                setPage((prevPage) => prevPage + 1); // Increment page
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
    }, [isFetching, page, totalPages]);

    return (
        <>
            {loading && page === 1 ? ( // Show shimmer only for the first page
                <ShimmerNews />
            ) : (
                <div className="container">
                    <div className="mx-auto" style={{ width: '100%', maxWidth: '550px' }}>
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                image={blog.source_img}
                                title={blog.title}
                                alt={blog.title}
                                content={blog.description}
                                link={blog.source_link}
                                provider={blog.source_name}
                            />
                        ))}
                    </div>
                </div>
            )}
            {loading && page > 1 && <div className="loading-indicator">Loading more blogs...</div>}
            {!loading && totalPages !== null && page >= totalPages && (
                <div className="end-of-content">You have reached the end of the content.</div>
            )}
        </>
    );
}
