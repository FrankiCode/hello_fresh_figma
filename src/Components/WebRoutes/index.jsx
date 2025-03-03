import React from 'react'
import OurPlans from '../../Pages/OurPlans'
import HowItWorks from '../../Pages/HowItWorks'
import OurMenus from '../../Pages/OurMenus'
import GiftCards from '../../Pages/GiftCards'
import Sustainability from '../../Pages/Sustainability'
import ThanksgivingBox from '../../Pages/ThanksgivingBox'
import { Route, Routes } from 'react-router'
import HelloFresh from '../../Pages/HelloFresh'


const WebRoutes = () => {

    const routerLink = [
                {id:10, path:"/", element: <HelloFresh/>},
                {id:11, path:"/ourplans", element: <OurPlans/>},
                {id:12, path:"/howitworks", element:<HowItWorks/>},
                {id:13, path:"/ourmenus", element:<OurMenus/>},
                {id:14, path:"/giftscards", element:<GiftCards/>},
                {id:15, path:"/sustainability", element:<Sustainability/>},
                {id:16, path:"/thanksgivingbox", element:<ThanksgivingBox/>}
    ]
  return (
    <div>
        <Routes>
            {routerLink.map(({id, path, element }) => {
                return <Route key={id} path={path} element={element}></Route>
            })}
        </Routes>
    </div>

  )
}

export default WebRoutes