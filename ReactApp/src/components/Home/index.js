import {Component} from "react"
import './index.css'
import { IoMdContact } from "react-icons/io";
import Navbar from '../Navbar'
import NavItems from "../NavItems"
import SalesComponent from "../SalesComponent"
import PeopleSearchComponent from "../PeopleSearchComponent"
import DepartmentComponent from "../DepartmentComponent"
import LatestPostComponent from "../LatestPostComponent"
import TrendingComponent from "../TrendingComponent"
import RoomComponent from "../RoomComponent"
import FooterComponent from "../FooterComponent"


import { CiMail } from "react-icons/ci";


//Sample datas to render the frontend Part
const navItems = [
    { id: 1, name: "brands" },
    { id: 2, name: "plug & play" },
    { id: 3, name: "ceiling lights" },
    { id: 4, name: "chandeliers" },
    { id: 5, name: "wall lights" },
    { id: 6, name: "outdoor" },
    { id: 7, name: "ceiling fans" },
    { id: 8, name: "shop by room" },
    { id: 9, name: "new" },
    { id: 10, name: "learn" },
    { id: 11, name: "sale" }
  ];

  const departmentData = [
    { id: 1, name: "Ceiling Lights", imgUrl: "https://imgprd.1stoplighting.com/crystorama-lighting/products/ken_2203_vg_300.jpg" },
    
    { id: 2, name: "Outdoor Lighting", imgUrl: "https://imgprd.1stoplighting.com/capital-lighting/products/946411bk_300.jpg" },
   
    { id: 3, name: "Ceiling Fans", imgUrl: "https://imgprd.1stoplighting.com/craftmade-lighting/products/gar56fb5_300.jpg" },
    
    { id: 4, name: "LED Mirrors", imgUrl: "https://imgprd.1stoplighting.com/elan-lighting/products/84165cg_300.jpg" },
    
    { id: 5, name: "Wall Lighting", imgUrl: "https://imgprd.1stoplighting.com/savoy-house/products/9_0901_1_322_300.jpg" },
    
    { id: 6, name: "Bath Lights", imgUrl: "	https://imgprd.1stoplighting.com/kichler/products/45574bk_300.jpg" }
  ];

  const latestpostData = [
    {
      id: 1,
      name: "Pro Tips",
      imgUrl: "https://images.1stoplighting.com/site/common/promos/all/2023/vaulted-ceilings.jpg",
      description: "Kitchen Lighting for Vaulted Ceilings"
    },
    {
      id: 2,
      name: "Style Spotlight",
      imgUrl: "https://images.1stoplighting.com/site/common/promos/all/2023/mid-century-modern-ideas.jpg",
      description: "Mid-Century Modern Lighting Ideas"
    },
    {
      id: 3,
      name: "Learn",
      imgUrl: "https://images.1stoplighting.com/site/common/promos/all/2023/bathroom-lighting-guide.jpg",
      description: "Bathroom Vanity Lighting"
    }
  ];
  
  const trendingData = [
    {
      id: 1,
      imageUrl: "https://imgcms.1stoplighting.com/site/common/promos/all/2023/brinley-by-kichler.jpg",
      title: "Farmhouse",
      description: "Feast your eyes on neutrals and vintage accents."
    },
    {
      id: 2,
      imageUrl: "https://imgcms.1stoplighting.com/site/common/promos/all/2023/lazlo-by-lark.jpg",
      title: "Mid-Century Modern",
      description: "Bold, functional, curvy, oh-so-chic."
    }
  ];
  
  const shopRoomData = [
    {
      id: 1,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-dining-room.jpg",
      title: "Dining Room"
    },
    {
      id: 2,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-entry-room.jpg",
      title: "Entry/Foyer"
    },
    {
      id: 3,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-outdoor-room.jpg",
      title: "Outdoor"
    },
    {
      id: 4,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-kitchen-room.jpg",
      title: "Kitchen"
    },
    {
      id: 5,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-bath-room.jpg",
      title: "Bathroom"
    },
    {
      id: 6,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-living-room.jpg",
      title: "Living Room"
    }
  ];


  const wayToShop = [
    {
      id: 1,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2023/april-hp-23_1stop-new-arrivals.jpg",
      title: "This Just In - New arrivals",
      description: "Shop for only the best and brightest."
    },
    {
      id: 2,
      imageUrl: "https://images.1stoplighting.com/site/common/promos/all/2023/closeout-products-deep-discounts.jpg",
      title: "Sale and Clearance Center",
      description: "You can have an eye for a bargain AND for style."
    }
  ];


  class Home extends Component{
    render(){
        return(
            <div className = 'home-bg-container'>
                <div className='home-contact-label'>
                    < IoMdContact className = 'home-contact-icon' />
                    <h1>Are you a Contractor or Design Pro? </h1>
                </div>
                <Navbar/>
                <div className="save-offer">
                    <CiMail/>
                    <p className="offer-">Save up to 25%</p>
                </div>
                <ul className="navItems-route-list">
                    {navItems.map((eachItem) =>{
                        return <NavItems key={eachItem.id} navItems={eachItem}/>
                    })}

                </ul>
                <SalesComponent/>
                <PeopleSearchComponent/>
                <h2 className="home-shopping-department">Shopping Department</h2>
                <ul className="department-container">
                    {departmentData.map((eachItem) =>{
                        return <DepartmentComponent key={eachItem.id} departmentList={eachItem}/>
                    })}
                </ul> 
                <h2 className="home-shopping-department">Our Latest Post</h2>
                <ul className="latest-post-container">
                    {latestpostData.map((eachItem) =>{
                        return <LatestPostComponent key={eachItem.id} latestPostList={eachItem}/>
                    })}
                </ul>   
                <div className="stay-in-loop-section">
                    <h3 className="stay-loop-description">Stay in the loop - Get our latest articles, sales, and more!</h3>
                    <p className="mail-listing">Join our Mailing List</p>
                </div>
                <h2 className="home-shopping-department">Trending Styles</h2>
                <ul className="trending-data-container">
                
                    {trendingData.map((eachItem) =>{
                        return <TrendingComponent key={eachItem.id} trendingList={eachItem}/>
                    })}

                </ul>
                <h2 className="home-shopping-department">Shop by Room</h2>
                <ul className="department-container">
                    {shopRoomData.map((eachItem) =>{
                        return < RoomComponent key={eachItem.id} shopRoomList={eachItem}/>
                    })}
                </ul> 
                <h2 className="home-shopping-department">More Ways to Shop</h2>
                <ul className="trending-data-container">
                
                {wayToShop.map((eachItem) =>{
                    return <TrendingComponent key={eachItem.id} trendingList={eachItem}/>
                })}

                </ul>

                <div className="following-section-container">
                        <div className="social-network-container">
                                <h3 className="question-section">Are You Following Us?</h3>
                                <p className="question-description">Check out the latest home lighting and decor trends, new arrivals and much more! </p>
                                <button className="social-btn-section">instagram</button>
                                <button className="social-btn-section">Pinterest</button>
                                <button className="social-btn-section">Facebook</button>
                        </div>

                </div>
                <div className="expert-picks-container">
                        <h2 className="experts-pick-heading"> Our Expert's Picks - Best of the Best</h2>
                        <p>Check out our hand-selected products and why we think you'll love them!</p>
                        <button className="view-product-btn">View Products</button>
                </div>
                <FooterComponent/>
              

            </div>
        )
    }
}

  
  
  
  
  
  
 



export default Home