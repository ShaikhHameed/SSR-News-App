import ContactForm from "./ContactForm";


export default function ContactPage(){

    return(
    <>
        <div className="container-fluid bg-secondary py-5 text-white d-flex align-items-center" style={{minHeight:"40vh"}}>
            <div className="container">
                <h1 className="fw-bold">Contact Us</h1>
            </div>
        </div>
        <div className="container py-5 text-center">
            <div className="mx-auto" style={{maxWidth:'850px'}}>
                <h2 className="fs-1">We’d Love to Hear from You!</h2>
                <p>Have questions, feedback, or partnership inquiries? We're here to help! Whether you're a reader, a business, or a media professional, we’d love to connect.</p>
            </div>
        </div>
        <div className="container my-5 py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    <img className="w-100" src="https://img.freepik.com/premium-psd/drawn-14-phone-iphone-advertisement-png-backgrounds_180633-7341.jpg" />
                </div>
                <div className="col-lg-6">
                <h1 className="mb-3">Contact Us</h1>
                    <ContactForm/>
                </div>
            </div>
            </div>


    </>)

}