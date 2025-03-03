import React from 'react'
import Button from '../../Components/Common/Button'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import WhyHelloFreshSection from '../../Components/Layout/HelloFreshHome/WhyHelloFreshSection'
import WhatInsideEachBox from '../../Components/Layout/HelloFreshHome/WhatInsideEachBox'
import CarouselRecipes from '../../Components/Layout/HelloFreshHome/CarouselRecipes'
import CookItLoveIt from '../../Components/Layout/HelloFreshHome/CookItLoveIt'
import FlexibelPlanDiv from '../../Components/Layout/HelloFreshHome/FlexiblePlanDiv'
import MoreQuestion from '../../Components/Layout/HelloFreshHome/MoreQuestions'

    const helloFreshPage = [
        {id:21, slogan: "Take the stress out of mealtime", plan: "America's Most Popular Meal Kit"}
    ]

    

const HelloFresh = ({}) => {
  return (
    <div className="container">
        <div style={{backgroundImage: `url("/div.png")`,
                backgroundSize: "cover",
                height: "90vh",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",

            }}>
                <div>
                    {
                        helloFreshPage.map(({id, slogan, plan}) => {
                            return <div key={id} className='helloFlesh'>
                                        <h2>{slogan}</h2>
                                        <p>{plan}</p>
                                        <Link to="/ourplans"><Button title="View our plans" btnClass="bgGreen"/></Link>
                                        <div>
                                            <FontAwesomeIcon className='chevronCircleDown' icon={faChevronCircleDown}/>
                                        </div>
                                    </div>
                        })
                    }
                </div>
        </div>
        
        <WhyHelloFreshSection/>
        <WhatInsideEachBox/>
        <CarouselRecipes/>
        <CookItLoveIt/>
        <FlexibelPlanDiv/>
        <MoreQuestion/>
    </div>
  )
}

export default HelloFresh