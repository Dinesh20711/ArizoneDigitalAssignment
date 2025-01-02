import "./index.css"





const RoomComponent = (props) =>{
    const {shopRoomList} = props 
    const {id,title,imageUrl} = shopRoomList
    return(
       
        <li className="room-list-items">
            <h3 className="room-heading">{title}</h3>
            <img className="rooms-image"src={imageUrl} alt="rooms"/>

        </li>
    )
}




export default RoomComponent