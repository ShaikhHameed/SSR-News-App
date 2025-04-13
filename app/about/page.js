

export default function About(){

    return(
        <>
            <div className="container py-5">
                <h1 className="text-center">About Us</h1>
                <div className="row py-5">
                    <div className="col-md-6">
                        <img className="w-100 rounded-4" src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?cs=srgb&dl=pexels-fauxels-3183197.jpg&fm=jpg" /> 
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-semibold">Revolutionizing News – One Summary at a Time</h2>
                        <p>In an era where information overload is the norm, staying informed shouldn't feel like a chore. At Peekshorts, we believe news should be quick, reliable, and easy to digest. </p>
                        <p>That’s why we’ve built an AI-powered platform that delivers 60-word summaries of the most important stories—so you can stay updated in seconds, not hours.</p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center fw-bold">Why Choose Peekshorts?</h2>
                <div className="row my-5">
                    <div className="col-md-3">
                        <h4 className="fw-semibold">Seamless News Bites</h4>
                        <p className="small">Traditional articles can be overwhelming. Peekshorts simplifies the news, distilling key facts into short, engaging summaries without losing their essence.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="fw-semibold">Fast & Reliable Updates                        </h4>
                        <p className="small">We prioritize accuracy and speed, ensuring you receive the latest news without delays or unnecessary clutter.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="fw-semibold">Unbiased & Fact-Driven</h4>
                        <p className="small">We cut through opinions and speculation to bring you neutral, well-researched content, sourced from credible news platforms.</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="fw-semibold">AI Tailored Insights</h4>
                        <p className="small">Our smart algorithms understand what matters to you. Get a customized feed based on your interests—whether it’s politics, business, tech, or entertainment.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-dark">
                <div className="container">
                    
                </div>
            </div>
        </>
    )

}