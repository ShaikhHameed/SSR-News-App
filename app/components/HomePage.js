import DownloadAppBox from "./commons/DownloadAppBox";
import CategorySlider from "./home-components/CategorySlider";
import HomeFeaturesSection from "./home-components/homeFeaturesSesction";
import HomeSlider from "./home-components/Homeslider";


export default function HomePage() {
  return (
    <>
      <div className="container py-5">
        <div className="py-5">
          <div className="row g-4">
            <div className="col-md-4">
              <img className="w-100" src={'/images/home/Phone 1.png'}></img>
            </div>
            <div className="col-md-6">
              <div className="py-5">
                <img className="w-100" src={'/images/home/60-words.png'} />
                <p className="text-center my-4">Stay informed with <strong>Quick, Precise,</strong> and <strong>AI-curated</strong> news summaries. Get the essence of global events before diving into details.</p>
                <div className="row justify-content-center">
                  <div className="col-md-4 col-6">
                    <img className="w-100" src={'/images/icons/google-download.png'} />
                  </div>
                  <div className="col-md-4 col-6">
                    <img className="w-100" src={'/images/icons/apple-download.png'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeSlider/>
      <CategorySlider/>


      <div className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h4 className=" fs-1">Here’s How <span className="text-theme">Peekshorts</span> Makes a Difference!</h4>
          <p className="small">Breaking News, Simplified! Peekshorts keeps you updated in seconds—no fluff, just facts.</p>
          <iframe width="100%" style={{ aspectRatio: '16/8', borderRadius:'1rem' }} src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tlebo_1gRumSt0hp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <HomeFeaturesSection/>

      {/* <div className="py-5 bg-img" style={{ background: "linear-gradient(to left, rgb(0 0 0 / 53%), rgb(0 0 0 / 54%)), url(/images/home/footer-bg.png)" }}>
        <div className="container text-center text-white">
          <h4 className="fs-1">Loved It?<br />
            Time to Make It Yours!</h4>
          <p className="small">Breaking News, Simplified! Peekshorts keeps you updated in seconds—no fluff, just facts.</p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row justify-content-center mt-5">
                <div className="col-md-4 col-6">
                  <img className="w-100" src={'/images/icons/google-download.png'} />
                </div>
                <div className="col-md-4 col-6">
                  <img className="w-100" src={'/images/icons/apple-download.png'} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}


        <DownloadAppBox/>


    </>
  )
}