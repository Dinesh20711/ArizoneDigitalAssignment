import "./index.css"
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import PopupComponent from "../PopupComponent"



const ChandlierItemsComponent = (props) =>{
    const {chandListItem,onDelete} = props 
    const {id,imageUrl,style} = chandListItem

   
    return (
        <div className="list-Items-card">
            <img src={imageUrl} alt="style" className ="style-image"/>
            <h4>{style}</h4>
            <button className="edit-btn">Edit</button>
           
            <PopupComponent onDelete={onDelete} chandListItem={chandListItem}/>
        </div>
    )
}


export default ChandlierItemsComponent