export default function ContactForm(){

    return(
        <>
            <form>
                    <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="your-name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="your-name" name="your-name" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="your-surname" className="form-label">Your Surname</label>
                        <input type="text" className="form-control" id="your-surname" name="your-surname" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="your-email" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="your-email" name="your-email" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="your-subject" className="form-label">Your Subject</label>
                        <input type="text" className="form-control" id="your-subject" name="your-subject"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="your-message" className="form-label">Your Message</label>
                        <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                    </div>
                    <div className="col-12">
                        <div>
                            <button  type="submit" className="btn btn-dark w-100 fw-bold d-block ms-auto" >Send</button>
                            </div>
                    </div>
                    </div>
                </form>
        </>
    )
}