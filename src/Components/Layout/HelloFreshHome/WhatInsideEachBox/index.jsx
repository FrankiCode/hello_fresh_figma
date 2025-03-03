import React from 'react'
import { whatInsideEachBox } from '../../../../Mock';
import { Link } from 'react-router';
import Button from '../../../Common/Button';

const WhatInsideEachBox = () => {
  return (
    <div className="whatBoxContainer">
      <div className='whatInsideEachBox'>
        
      <div className="imageInsideBox">
        <img src="US-homepage-image.png.png" alt="homepage" />
      </div>

      <div className="eacBox-rightContainer">
        <h3>What's inside each box?</h3>

        <div className="insideBox">
          {
            whatInsideEachBox.map(({id, text}) => {
              return <div key={id}>
                        <p>{text}</p>
                    </div>
            })
          }
        </div>

        <Link to="/ourplans"><Button title="View our plans" btnClass="bgGreen" outlined={true}/></Link>
      </div>
    </div>
    </div>
  )
}

export default WhatInsideEachBox;