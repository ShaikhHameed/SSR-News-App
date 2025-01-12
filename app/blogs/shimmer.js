
export default function ShimmerNews(){
    return(
    <>
    <div className="container">
    <div className="mx-auto" style={{ width: '100%', maxWidth: '550px' }}>

        <div className="card mt-5" aria-hidden="true" style={{minHeight:'80vh'}}>
        <div className="card-img-top w-100 bg-secondary" style={{height:"250px"}}></div>

        <div className="card-body">
            <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
            </p>
            <a href="#" className="btn btn-secondary disabled placeholder col-6"></a>
        </div>
        </div>
        </div>
        </div>
    </>
    );
}