import HomeSlider from "./home-components/Homeslider";


export default function HomePage(){
    return(
        <>
             <div className="container py-5">
                <div className="py-5">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <img className="w-100" src={'/images/home/Phone 1.png'}></img>
                    </div>
                    <div className="col-md-6">
                      <div className="py-5">
                        <img className="w-100" src={'/images/home/60-words.png'}/>
                        <p className="text-center my-4">Stay informed with <strong>Quick, Precise,</strong> and <strong>AI-curated</strong> news summaries. Get the essence of global events before diving into details.</p>
                        <div className="row justify-content-center">
                          <div className="col-md-4">
                            <img className="w-100" src={'/images/icons/google-download.png'} />
                          </div>
                          <div className="col-md-4">
                            <img className="w-100" src={'/images/icons/apple-download.png'} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HomeSlider/>
        </>
    )
}