import {Component} from 'react'
import './index.css'
import ShopItemsComponent from '../ShopItemsComponent'
import { Link } from "react-router-dom";

const shopItems = [
    { id: 1, imgUrl: "https://imgcms.1stoplighting.com/site/common/promos/all/2025/CWI.png" },
    { id: 2, imgUrl: "https://imgcms.1stoplighting.com/site/common/promos/all/2025/Livex.png" },
    { id: 3, imgUrl: "https://imgcms.1stoplighting.com/site/common/promos/all/2025/Pageone.png" },
    { id: 4, imgUrl: "https://imgcms.1stoplighting.com/site/common/promos/all/2025/Progress.png" },
   
  ];
  

class SalesComponent extends Component{
       




    render(){
        return(
            <>
            <h2 className="sales-heading-3">Click the below button to visit CRUD Features</h2>

                <Link to='/chandlier'><button className="sales-shop-btn1">Click Here</button></Link>
            <div className = "sales-container">
                            
                <h1 className="sales-section-heading">NEW YEAR NEW LIGHTING</h1>
                <h2 className="sales-heading-2">Lighting Extravaganza-upto 40% OFF until 1/12</h2>

                <button className="sales-shop-btn">Shop now</button>

                <hr className="horizontal-line"/>
                <ul className="sales-shop-btn-container">
                    {shopItems.map((eachItem) =>{
                        return <ShopItemsComponent key={eachItem.id} shopItems = {eachItem}/>
                    })}
                </ul>
              

            </div>
            <div className="sales-section-shop-products">
                <img className="product-images" src="https://imgcms.1stoplighting.com/site/common/promos/all/2023/skyx-hero-100.jpg"/>
                <img className="sm-product-images" src="https://imgcms.1stoplighting.com/site/common/promos/all/2024/redone_chandelier_feature_heroslider_mobile.webp"/>
                <img className="lg-product-images-1" src="https://imgcms.1stoplighting.com/site/common/promos/all/2023/skyx-hero-100.jpg"/>
                <img className='lg-product-image' src="https://imgcms.1stoplighting.com/site/common/promos/all/2024/final_chandelier_feature_heroslider.webp"/>
            </div>
            </>
        )
    }
}

export default SalesComponent