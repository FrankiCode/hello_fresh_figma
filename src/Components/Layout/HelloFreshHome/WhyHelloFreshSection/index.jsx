import React from 'react'
import { whyHelloFresh } from '../../../../Mock'
import Cards from '../../../Common/Cards'
import Button from '../../../Common/Button'
import { Link } from 'react-router'

const WhyHelloFreshSection = () => {
  return (
    <div className="whyHelloSection">
            <h2>Why Hello Fresh?</h2>
            <div className='cards'>
                {
                    whyHelloFresh.map(({id, image, title, description}) => {
                       return <Cards title={title} image={image} description={description} key={id}/>
                    })
                }
            </div>
            <Link><Button title="Get started" btnClass="greenBorderBtn"/></Link>
        </div>
  )
}

export default WhyHelloFreshSection