import ContactForm from "./ContactForm";


export default function ContactPage(){

    return(
    <>
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