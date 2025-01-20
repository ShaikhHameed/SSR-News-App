'use client'
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard({provider,title,image,alt,content,link}){

    return(
        <>
        <div className="news-cartd-section">
            <div className="news-card w-100 my-4" >
                <div  className="news-card-img blur-section" style={{background:'#ff9b9b'}}s>
                    <img className="card-img-news" src={image}  alt={alt}/>
                </div>
                <div className="news-card-body">
                    <div>
                        <div className="news-provider">{provider}</div>
                        <h3 className="card-title">{title}</h3>
                        <div>{content}</div>
                    </div>
                    <div>
                        <a href={link} className="text-secondary"  target="_blank">Read More <FaArrowRight />
                        </a>
                    </div>
                </div>
                </div>
        </div>        
        </>
    )
}