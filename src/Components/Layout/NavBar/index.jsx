import React from 'react'
import { href, Link, NavLink } from 'react-router'
import Button from '../../Common/Button'

const NavBar = () => {
    const NavBarLink = [
        {id:1, href:"/ourplans", title:"Our Plans"},
        {id:2, href:"/howitworks", title:"How It Works"},
        {id:3, href:"/ourmenus", title:"Our Menus"},
        {id:4, href:"/giftscards", title:"Gift Cards"},
        {id:5, href:"/sustainability", title:"Sustainability"},
        {id:6, href:"/thanksgivingbox", title:"Thanksgiving Box"}
    ]

  return (
        <div className='header'>
            <div className='navbar'>
                <div className="logo">
                    <Link to={"/"}><img src={"Hello_Fresh_Lockup.png.svg"}/></Link>
                </div>
                <div className='NavLink'>
                    {NavBarLink.map(({id, href, title}) => {
                        return <NavLink className="links" key={id} to={href}>{title}</NavLink>
                    })}
                </div>
            </div>
            <Button title="Login" btnClass="greenBorderBtn"/>
        </div>
  )
}

export default NavBar