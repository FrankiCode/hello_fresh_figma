import React from 'react'
import { Link } from 'react-router'
import Button from '../../../Common/Button'

const FlexibelPlanDiv = () => {
  return (
    <div style={{backgroundImage: `url("/foot.png")`,
                backgroundSize: "cover",
                margin: "15px 0",
                height: "40vh",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
    }}>
        <div className='inner-flexible-container'>
            <h2>Flexible Plans</h2>
            <p>to meet your household's needs</p>
            <Link to="/ourplans"><Button title="View our plans" btnClass="bgGreen"/></Link>
        </div>
    </div>
  )
}

export default FlexibelPlanDiv