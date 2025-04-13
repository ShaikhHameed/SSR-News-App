import { IoNewspaperSharp } from "react-icons/io5";
import { MdOutlineQuickreply } from "react-icons/md";
import { MdPermDeviceInformation } from "react-icons/md";
import { GiVibratingSmartphone } from "react-icons/gi";




export default function HomeFeaturesSection(){

    return(<>
        <div className=" py-5 text-center">
            <div className="container">
            <h4 className=" fs-1">See Everything in Action – News at Lightning Speed!</h4>
            
            </div>
            <div className="row justify-content-center align-items-center px-4">
                <div className="col-md-4">
                <div className="mobile-wrapper-home my-3">   
                    {/* <img  className="h-100" src={'/images/home/peakshorts-Mobile.png'} /> */}
                    <div className="mobile-slides">
                        <div className="mobile-slide">
                            <img className="w-100" src="/images/logos/Peekshorts logo.svg" />
                        </div>
                    </div>
                </div> 
                </div>

                <div className="col-md-4">
                    <div className="row g-3">
                        <div className="col-6">
                            <div className="feature-box">
                            <IoNewspaperSharp size={'5rem'} />
                            <h5 className="fw-semibold">Latest News</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="feature-box">
                            <MdPermDeviceInformation size={'5rem'} />
                            <h5 className="fw-semibold">Never miss an update</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="feature-box">
                            <MdOutlineQuickreply  size={'5rem'} />
                            <h5 className="fw-semibold">Flash Support</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="feature-box">
                            <GiVibratingSmartphone size={'5rem'} />
                            <h5 className="fw-semibold">Stay ahead of the curve</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div>
        </div>
    </>)
}