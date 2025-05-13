import "./Item.css"
export default function Item(props){
    return(
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="itemPrice">
                <div className="newP">
                    &#8377;{props.new_price}
                </div>
                <div className="oldP">
                    &#8377;{props.old_price}
                </div>
            </div>
        </div>
    )
}