import React from 'react'
import {BrowserRouter,Route, Router} from 'react-router-dom'
import Home from './Home'
import Details from "./Details"
import Header from './Header'
import QuickSearchDisplay from './QuickSearchDisplay'
import RestaurantDetail from './RestaurantDetail'
import OrderForms from './orders/forms'
import OrderDisplay from './orders/OrderDisplay'

const Routing=()=>{
    return(
        <BrowserRouter>
            <div>
                
                <Route exact path='/' component={Home}></Route>
                <Route path='/details/:id' component={Details}></Route>    
                <Route path='/restaurantdetail/:id' component={RestaurantDetail}></Route>
                <Route path='/order/:id' component={OrderForms}></Route> 
                <Route path="/orderdisplay" component={OrderDisplay}></Route>
            </div>        
        
        </BrowserRouter>
    )
}

export default Routing;