'use client'

export default function BlogCard({title,image,alt,content}){

    return(
        <>
        <div className="news-cartd-section">
            <div className="card w-100 my-4">
                <img src={image} className="card-img-top" alt={alt}/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <div>{content}</div>
                </div>
                </div>
        </div>        
        </>
    )
}