
export default function ShimmerNews(){
    return(
    <>
    <div className="container">
    <div className="mx-auto" style={{ width: '100%', maxWidth: '550px' }}>

        <div class="card mt-5" aria-hidden="true" style={{minHeight:'80vh'}}>
        <div class="card-img-top w-100 bg-secondary" style={{height:"250px"}}></div>

        <div class="card-body">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <a href="#" tabindex="-1" class="btn btn-secondary disabled placeholder col-6"></a>
        </div>
        </div>
        </div>
        </div>
    </>
    );
}