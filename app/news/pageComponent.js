'use client';
import { useEffect, useState, useRef } from 'react';
import '../blogs.scss';
import BlogCard from './component/blogcard';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import ShimmerNews from './shimmer';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const splideRef = useRef(null);

    const fetchBlogs = async (currentPage) => {
        setLoading(true);
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
            setBlogs((prev) => [...prev, ...processBlogs.blogs]);

            if (processBlogs.total_pages) {
                setTotalPages(processBlogs.total_pages);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
            setIsFetching(false);
        }
    };

    useEffect(() => {
        fetchBlogs(page);
    }, [page]);

    useEffect(() => {
        if (blogs.length > 0) {
            const splide = new Splide('.splide', {
                direction: 'ttb',
                height: '100vh',
                perPage: 1,
                pagination: false,
                arrows: false,
                drag: true,
                keyboard: true,
            });

            splide.mount();
            splideRef.current = splide;

            // Handle custom arrows
            const upArrow = document.querySelector('.arrow-up');
            const downArrow = document.querySelector('.arrow-down');

            upArrow?.addEventListener('click', () => splide.go('<'));
            downArrow?.addEventListener('click', () => splide.go('>'));

            // Infinite scroll when reaching last slide
            splide.on('move', (newIndex) => {
                if (
                    newIndex === blogs.length - 1 &&
                    !isFetching &&
                    (totalPages === null || page < totalPages)
                ) {
                    setIsFetching(true);
                    setPage((prevPage) => prevPage + 1);
                }
            });

            return () => {
                splide.destroy();
            };
        }
    }, [blogs]);

    return (
        <>
            {loading && page === 1 ? (
                <ShimmerNews />
            ) : (
                <div className="news-wrapper">
                    <div className="arrows-wrapper">
                        <div className="arrows arrow-up"><FaAngleUp size={'1.2rem'} /></div>
                        <div className="arrows arrow-down"><FaAngleDown size={'1.2rem'} /></div>
                    </div>
                    <div className="splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                {blogs.map((blog, index) => (
                                    <li className="splide__slide" key={index}>
                                        <div className="container mx-auto" style={{ maxWidth: '550px' }}>
                                            <BlogCard
                                                image={blog.source_img}
                                                title={blog.title}
                                                alt={blog.title}
                                                content={blog.description}
                                                link={blog.source_link}
                                                provider={blog.source_name}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
