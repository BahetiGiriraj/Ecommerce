import "./Offers.css"
import exclusive_image from "../assets/exclusive_image.png"

export default function Offers(){
    return (
        <div className="offers">
            <div className="offers-left">
                 <h1>Exclusive</h1>
                 <h1>Offers for you</h1>
                 <p>Only On Best Seller</p>
                 <button>Check Out!</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}