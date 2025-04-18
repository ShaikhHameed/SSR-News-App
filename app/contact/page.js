import HeaderGap from "../components/commons/HeaderGap";
import SocialBox from "../components/commons/socialBox";
import ContactForm from "./ContactForm";


export default function ContactPage(){

    return(
    <>
        <HeaderGap/>
        <div className="mt-4"></div>
        <div className="container bg-glazz rounded-4 py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    <h2 className="fs-1">We’d Love to Hear from You!</h2>
                    <p>Have questions, feedback, or partnership inquiries? We're here to help! Whether you're a reader, a business, or a media professional, we’d love to connect.</p>
                </div>
                <div className="col-lg-6">
                <h1 className="mb-3">Contact Us</h1>
                    <ContactForm/>
                </div>
            </div>
            </div>

        <SocialBox title={'Stay Connected!'} content={'Follow us on social media for the latest updates, news, and exclusive content.'}/>

    </>)

}