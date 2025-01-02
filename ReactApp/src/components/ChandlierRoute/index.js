import {Component} from "react" 
import Navbar from "../Navbar"
import ChandlierItemsComponent from "../ChandlierItemsComponent"
import NavItems from "../NavItems"
import './index.css'




class ChandlierRoute extends Component{
    state = {styleItemsList:[]}

    getData = (data) =>{
        this.setState({styleItemsList:data})
    }
    
    onDeletegetData = (data) =>{
        this.setState({styleItemsList:data})
    }

    onDelete = async (id) =>{
        
        console.log(`-----${id}`)
       const url = `http://localhost:3001/api/deletelightings/${id}`
       console.log(url)
       const response = await fetch(url, { method: 'DELETE' });

       const fetchedData = await response.json() 
       console.clear();
       console.log(fetchedData.data)
       

       this.onDeletegetData(fetchedData.data)

    }


    getStyleDetails = async() =>{
        const url = "http://localhost:3001/api/lightings"

        const response = await fetch(url)
        const data = await response.json() 
        console.log(data)
      
        this.getData(data)
       

    }

    componentDidMount(){
        this.getStyleDetails()
        
    }

    render(){
        const {styleItemsList} = this.state
        console.log(styleItemsList)
        return (
            <>
                <Navbar/>
                <div className="chandliers-styles-container">
                    <h2 className="chandlier-heading">Chandeliers</h2>

                    <div className = "shop-by-style-bar">
                        <h4>Shop by Styles</h4>
                    </div>
                    <ul className="chandlier-container">
                        {styleItemsList.map((eachItem) =>{
                            return <ChandlierItemsComponent onDelete = {this.onDelete} key={eachItem.id} chandListItem={eachItem}/>
                        })}
                    </ul>




                </div>
               
            </>
        )
    }
}




export default ChandlierRoute