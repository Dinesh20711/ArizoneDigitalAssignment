import "./index.css"


const NavItems = (props) =>{

    const {navItems} = props 
    const {id,name} = navItems
    return(
        <li ><p className="nav-item-name">{name}</p></li>
    )
}


export default NavItems