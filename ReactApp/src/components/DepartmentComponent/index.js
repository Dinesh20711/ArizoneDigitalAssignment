import './index.css'



const DepartmentComponent = (props) =>{
        const {departmentList} = props 
        const {id,imgUrl,name} = departmentList

    return(
       <li className="department-list-items">
        <h3 className="department-heading">{name}</h3>
        <div className = "department-items-section">
            <img className="department-images" src={imgUrl} alt={name}/>
        </div>


       </li>
    )
}



export default DepartmentComponent