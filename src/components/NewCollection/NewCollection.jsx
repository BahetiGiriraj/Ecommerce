import "./NewCollection.css"
import new_collections from "../assets/new_collections"
import Item from "../Item/Item"
export default function NewCollection(){
    return(
        <div className="newcollection">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item , i) => {
                    return <Item key={i}  id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}