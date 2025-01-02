import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'
  const peopleSearchData = [
    { id: 1, name: "floor lamps" },
    { id: 2, name: "wall sconces" },
    { id: 3, name: "celest" },
    { id: 4, name: "visual comfort" },
    { id: 5, name: "uttermost decor" },
    { id: 6, name: "linear chandelier" },
    { id: 7, name: "table lamps" },
    { id: 8, name: "wall art" }
  ];

const PeopleSearchComponent = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  const settingsLg = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  return (
    <>
    <div className="slider-container-sm">
        <h3  className="people-search-heading">People are Searching for...</h3>
      <Slider {...settings}>
        {peopleSearchData.map((eachItem) =>{
            return <div key={eachItem.id}>
            <button className="people-search-btn">{eachItem.name}</button>
          </div>
        })}
        
       
      </Slider>
    </div>
    <div className="slider-container-lg">
    <h3  className="people-search-heading">People are Searching for...</h3>
      <Slider {...settingsLg}>
        {peopleSearchData.map((eachItem) =>{
            return <div key={eachItem.id}>
            <button className="people-search-btn">{eachItem.name}</button>
          </div>
        })}
        
       
      </Slider>
    </div>

    </>
    
  )
}

export default PeopleSearchComponent