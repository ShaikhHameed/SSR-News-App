import { FaEarthAmericas, FaHouseFlag } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import { RiMoneyDollarCircleLine, RiMovie2Fill } from "react-icons/ri";



export default function CategorySlider() {
    return (
        <>
            <div className="container py-5 my-5">
                <h1 className="text-center mb-4">Browse by Category</h1>
                
                <div className="category-flex"  >
                    <div className="category-btn-item">Politics</div>
                    <div className="category-btn-item">International</div>
                    <div className="category-btn-item">Environmental</div>
                    <div className="category-btn-item">Science</div>
                    <div className="category-btn-item">Entertainment</div>
                    <div className="category-btn-item">Economy</div>
                    <div className="category-btn-item">Lifestyle</div>
                </div>

            </div>
        </>
    )
}