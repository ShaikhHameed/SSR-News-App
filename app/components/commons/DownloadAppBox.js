

export default function DownloadAppBox(){

    return(<>
    
    <div className="container py-5 rounded-4 bg-glazz text-center mb-4">
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
    </>
    )

}