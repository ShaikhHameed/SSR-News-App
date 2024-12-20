'use client';
import dynamic from "next/dynamic";
const BlogPage = dynamic(() => import("./pageComponent"),{rss:false});

// import BlogPage from "./pageComponent";

export default function Blogs(){

    return <BlogPage/>

}