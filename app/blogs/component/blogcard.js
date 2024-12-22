'use client'

export default function BlogCard({provider,title,image,alt,content,link}){

    return(
        <>
        <div className="news-cartd-section">
            <div className="card w-100 my-4" >
                <div  className="card-img-top blur-section" style={{background:'#ff9b9b'}}s>
                    <img className="card-img-news" src={image}  alt={alt}/>
                </div>
                <div className="card-body">
                    <h5 className="h6 fw-bold text-secondary">{provider}</h5>
                    <h3 className="card-title">{title}</h3>
                    <div>{content}</div>
                    <a href={link} target="_blank">Read More</a>
                </div>
                </div>
        </div>        
        </>
    )
}