
export default function Home() {
  return (
    <>
    <div className="container py-5">
    <h2 className="text-center mt-5 h1 my-4 fw-light">We Are <span className="fw-bold">PeekShorts</span></h2>
      <img src="https://thumbs.dreamstime.com/b/d-render-realistic-illustration-iphone-mockup-transparent-background-329668045.jpg" style={{maxWidth:'750px'}} className="w-100 d-block mx-auto rounded-4" />
    <h4 className="fw-normal h2 text-center">Changing the way you consume News.</h4>
      
      <h3 className="fw-light text-center h2 my-3">We are <span className="fw-bold">Peak</span></h3>
      <h3 className="fw-light text-center h2 my-3">We are <span className="fw-bold">Short</span></h3>
      <h3 className="fw-light text-center h1 my-3">We are <span className="fw-bold">PeekShorts</span></h3>

      <div className="masonry-section mt-5">
          <img className=" rounded-4" src='https://i.pinimg.com/736x/50/9e/dd/509edde85052dce48a3230f23b056a6e.jpg' /> 
          <img className=" rounded-4" src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4e0706101782941.5f28451fa3621.png' /> 
          <img className=" rounded-4" src='https://yi-files.yellowimages.com/products/945000/945670/1598518-full.jpg' /> 
          <img className=" rounded-4" src='https://i.pinimg.com/736x/68/e5/35/68e535946e83a1155b82cd9f86a2a69e.jpg' /> 
      </div>
      
    </div>
    </>
  );
}
