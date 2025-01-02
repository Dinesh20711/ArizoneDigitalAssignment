import {Component} from "react"
import './index.css'
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiMail } from "react-icons/ci";





class Navbar extends Component{
    render(){
        return(
            <nav className = 'nav-bar-container'>
                <div className="sm-nav-container">
                    <div className="logo-cart-container">
                        <img src="https://imgcms.1stoplighting.com/site/theme/www_1stoplighting_com/1stop_logo.png" alt="logo" className="logo-image"/>
                        <BsCart3 className="cart-icon"/>
                    </div>
                    <div className = "nav-items-container">
                            <GiHamburgerMenu className="nav-icons"/>
                            <FaRegQuestionCircle className="nav-icons"/>
                            <RiContactsLine className="nav-icons"/>
                            <FaHeart/>
                            <div className="search-input-container">
                                <input className="search-input" placeholder="Search..."/>
                                <FaSearch/>

                            </div>

                    </div>
                </div>
                <div className = "lg-nav-container">
                <div className="logo-cart-container">
                        <img src="https://imgcms.1stoplighting.com/site/theme/www_1stoplighting_com/1stop_logo.png" alt="logo" className="logo-image"/>
                        <div className="search-input-container">
                                <input className="search-input" placeholder="Search..."/>
                                <FaSearch/>
                        </div>
                        <div  className="nav-items-icons-list">
                            <div className="save-offer-label">
                                <CiMail/>
                                <p className="save-title-para">Save up to 25%</p>
                            </div>
                            <div className="nav-items-lg">
                                <FaRegQuestionCircle className="nav-icons"/>
                                <p>Support</p>
                            </div>
                            <div className="nav-items-lg">
                                <RiContactsLine className="nav-icons"/>
                                <p>Acount</p>
                            </div>
                            <div className="nav-items-lg">
                                <FaHeart className="favourite-icon"/>
                                <p>My Favourite</p>
                            </div>
                            <div className="nav-items-lg">
                                <BsCart3 className="cart-icon"/>
                                <p>Cart</p>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}


export default Navbar