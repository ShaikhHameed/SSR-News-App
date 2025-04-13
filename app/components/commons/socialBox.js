import { FaFacebook  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";




export default function SocialBox({title,content}){
    return(
        <>
        <div className="container py-5">
            <div style={{maxWidth:'500px'}}>
                <h2>{title??'Need more help? Reach out to us here. 💙'}</h2>
                <p>{content??"Follow us on social media for the latest updates, news, and exclusive content."}</p>
                <div className="my-5">
                    <div className="d-flex flex-wrap" style={{gap:'1rem'}}>
                        <FaFacebook size={40} color={'#1877F2'} />
                        <FaSquareXTwitter size={40} />
                        <BsInstagram size={40} color={'#D62976 '}  />

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}