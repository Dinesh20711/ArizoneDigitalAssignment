import "./index.css"


const LatestPostComponent = (props) =>{

        const {latestPostList} = props 
        const {id,name,description,imgUrl} = latestPostList

    return(
        <li className="list-items-latest">
            <img className="latest-post-image" src={imgUrl} alt={name}/>
            <p className="latest-des">{name}</p>
            <h3 className="latest-post-description">{description}</h3>

        </li>
    )
}


export default LatestPostComponent