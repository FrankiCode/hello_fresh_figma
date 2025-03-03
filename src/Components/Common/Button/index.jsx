import React from 'react'

const Button = ({title, btnClass, outlined}) => {
  return (
    <div>
        <button className={`btn ${outlined ? "outlined" : ""} ${btnClass}`}>{title}</button>
    </div>
  )
}

export default Button;