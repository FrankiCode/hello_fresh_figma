import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { recipesCards } from '../../../../Mock';

import React from 'react'
import Button from '../../../Common/Button';
import { Link } from 'react-router';

const CarouselRecipes = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 1320, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


  return ( 
    <div className='container-global'> 
        <h2>Over 30+ fresh recipes every week</h2>
        <p>Easy meals designed by professional chefs and nutritionists</p>
    <Carousel 
    className='items-container'
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
 >

      {
        recipesCards.map(({id, image, category, title}) => {
            return <div key={id} className='carousel-inner'>
                <div className='carouselImage'>
                    <img src={image} />
                </div>
                <div>
                    <h4>{title}</h4>
                    <span>{category}</span>
                </div>
            </div>
        })
      }

    </Carousel>
    <Link to="/ourmenus"><Button title="View our menus" btnClass="greenBorderBtn"/></Link>
    </div>
  )
}

export default CarouselRecipes;



// {
//     recipesCards.map(({id, image, title, category}) => {
//         return <div className='innerCarousel-container' key={id}>
//                     <div className="carouselImage">
//                         <img src={image} alt="" />
//                     </div>
//                     <h4>{title}</h4>
//                     <span>{category}</span>
//                 </div>
//     })
// }