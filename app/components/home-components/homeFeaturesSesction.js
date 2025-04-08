

export default function HomeFeaturesSection(){

    return(<>
        <div className=" py-5 text-center">
            <div className="container">
            <h4 className=" fs-1">See Everything in Action – News at Lightning Speed!</h4>
            
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                <img style={{ width: 'auto', height: '70vh' }} className="d-block mx-auto mt-5" src={'/images/home/peakshorts-Mobile.png'} />
                </div>

                <div className="col-md-4">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="feature-box"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-box"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-box"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature-box"></div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </>)
}