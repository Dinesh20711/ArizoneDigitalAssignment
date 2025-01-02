
import './index.css'


const ShopItemsComponent = (props) =>{
    const {shopItems} = props
    const {id,imgUrl} = shopItems
    return(
        <li><button className="shop-btn"><img className="shop-img" src={imgUrl} alt="shop"/><br/>Shop</button></li>
    )
}


export default ShopItemsComponent