import Link from "next/link";


export default function Navbar(){

    return(
    <>
        <nav className="navbar navbar-fixed navbar-expand-lg bg-theme ">
            <div className="container">
                <Link className="navbar-brand text-white" href={'/'}>PeekShorts</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link text-white active" href={'/news'}>News</Link>
                    <Link className="nav-link text-white" href={'/about'}>About</Link>
                    <Link className="nav-link text-white" href={'/contact'}>Contact</Link>
                    <Link className="nav-link text-white" href={'/download'}>Download Now</Link>

                </div>
                </div>
            </div>
            </nav>
        <div className="mb-4"></div>    
    </>
    );

}