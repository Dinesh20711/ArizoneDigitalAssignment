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
            <h4 className="style-name">{style}</h4>
            <div className="btn-container">
                
            
                <PopupComponent onDelete={onDelete} chandListItem={chandListItem}/>
            </div>
        </div>
    )
}


export default ChandlierItemsComponent