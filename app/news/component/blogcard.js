'use client'
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard({provider,title,image,alt,content,link}){

    return(
        <>
        <div className="news-cartd-section">
            <div className="news-card w-100 my-4" >
                <div>
                <div  className="news-card-img blur-section" style={{background:'#ff9b9b'}}s>
                    <img className="card-img-news" src={image}  alt={alt}/>
                </div>
                <div className="news-card-body">
                        <div className="news-provider">{provider}</div>
                        <h3 className="card-title">{title}</h3>
                        <div className="content-news-elm" dangerouslySetInnerHTML={{__html:content}} />
                    
                </div>
                </div>
                <div style={{paddingLeft:'1rem'}}>
                    <a href={link} className="text-secondary"  target="_blank">Read More <FaArrowRight />
                    </a>
                </div>

                </div>
        </div>        
        </>
    )
}