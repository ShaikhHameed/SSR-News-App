import { FaEarthAmericas, FaHouseFlag } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { RiMoneyDollarCircleLine, RiMovie2Fill } from "react-icons/ri";



export default function CategorySlider() {
    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Browse by Category</h1>
                <div className="d-flex flex-wrap justify-content-center" style={{ gap: '1.8rem' }}>

                    <div>
                        <div className="category-home-box">
                            <FaEarthAmericas size={'50px'} />
                        </div>
                        <h4 className="fs-5 text-center mt-2">Global</h4>
                    </div>

                    <div>
                        <div className="category-home-box">
                            <FaHouseFlag size={'50px'} />
                        </div>
                        <h4 className="fs-5 text-center mt-2">Politics</h4>
                    </div>

                    <div>
                        <div className="category-home-box">
                            <RiMoneyDollarCircleLine size={'50px'} />
                        </div>
                        <h4 className="fs-5 text-center mt-2">Economic</h4>
                    </div>

                    <div>
                        <div className="category-home-box">
                            <RiMovie2Fill size={'50px'} />
                        </div>
                        <h4 className="fs-5 text-center mt-2">Entertainment</h4>
                    </div>

                    <div>
                        <div className="category-home-box">
                            <GiMaterialsScience size={'50px'} />
                        </div>
                        <h4 className="fs-5 text-center mt-2">Science</h4>
                    </div>

                </div>
            </div>
        </>
    )
}