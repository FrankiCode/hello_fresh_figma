import React from 'react'
import { cookItLoveIt } from '../../../../Mock'
import Cards from '../../../Common/Cards'

const CookItLoveIt = () => {
  return (
    <div className='cookItLoveIt'>
        <h2>Cook it Love it Tag it #HelloFreshPics</h2>
        <span>Follow us on Instagram @hellofresh</span>
        <div className="loveIt">
            {
                cookItLoveIt.map(({id, image, title}) => {
                    return <Cards title={title} image={image} key={id} className="cookIt"/>
                })
            }
        </div>
    </div>
  )
}

export default CookItLoveIt