import "./index.css"



const TrendingComponent = (props) =>{
    const {trendingList} = props 
    const {id,title,description,imageUrl} = trendingList

    return (
        <li className="trend-list-container">
            <img className="trending-images" src={imageUrl} alt="trend"/>
            <div className="Styled-trnding-card">
                <h3 className="title-section">{title}</h3>
                <p className="description-section">{description}</p>
                <a className="shop-now-btn">Shop now</a>
            </div>
        </li>
    )
}


export default TrendingComponent