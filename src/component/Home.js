import React from 'react'
import Search from './Search'
import QuickSearch from './QuickSearch'
import Footer from './Footer'


//functional component
const Home=(props)=>{

   const handleRestaurant=(data)=>{
        console.log(data)
        let url=`/restaurantdetail/${data}`
      //  console.log(this.props)
       props.history.push(url)
    }
    return(
      
        <div >
            <Search restid={(data)=> handleRestaurant(data)} />

             

            <QuickSearch/>
            <Footer/>
        </div>
      
    )
}

export default Home;