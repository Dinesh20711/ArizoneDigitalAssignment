import {Component} from "react" 
import Navbar from "../Navbar"
import ChandlierItemsComponent from "../ChandlierItemsComponent"

import './index.css'




class ChandlierRoute extends Component{
    state = {styleItemsList:[],style:'',imgUrl:""}


    getUserInput=(event) =>{
        this.setState({style:event.target.value})
    }

    getImageUrl=(event) =>{
        this.setState({imgUrl:event.target.value})
    }

    getData = (data) =>{
        this.setState({styleItemsList:data})
    }
    
    onDeletegetData = (data) =>{
        this.setState({styleItemsList:data})
    }

    
    setStateCreateChandliers = (data) => {
        this.setState({styleItemsList:data})
    }

    onDelete = async (id) =>{
        
        //console.log(`-----${id}`)
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

    


    createChandeliers = async(event) =>{
        event.preventDefault();
        const {style,imgUrl} = this.state

        const newStyle={
            imageUrl: imgUrl,
            style: style
        }

        console.log(newStyle)

        const options = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newStyle), 
          };
      
        const url = `http://localhost:3001/api/addlightings`
        console.log(url)
        const response = await fetch(url, options);
 
        const fetchedData = await response.json() 
        //console.clear();
        console.log(fetchedData.data)
        
 
        this.setStateCreateChandliers(fetchedData.data)
        this.setState({style:"",imageUrl:""})
 
     }

    render(){
        const {styleItemsList,imageUrl,style} = this.state
        console.log(styleItemsList)
        return (
            <>
                <Navbar/>
                <div className="chandliers-styles-container">
                    <h2 className="chandlier-heading">Chandeliers</h2>

                    <div className = "shop-by-style-bar">
                        <h4>Add Chandeliers by Styles</h4>
                    </div>

                    <div className = "shop-by-style-bar">
                        <div>
                            <form onSubmit={this.createChandeliers}>
                                
                                <input className="input-section" value = {style} type="text" onChange={this.getUserInput} placeholder="Style"/>
                                <input className="input-section" value={imageUrl} type="text" onChange={this.getImageUrl} placeholder="ImageUrl"/>
                                <button className="submit-btn" type="submit"> submit </button>
                            </form>
                        </div>
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