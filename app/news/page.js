'use client';
import dynamic from "next/dynamic";
import Head from "next/head";

const BlogPage = dynamic(() => import("./pageComponent"),{ssr:false});

// import BlogPage from "./pageComponent";
// export const metadata = {
//     title: 'PeakShorts | Feed',
//   };

export default function Blogs(){

    return <>
        <title>PeakShorts | Feed</title>
    <BlogPage/>
    </>

}