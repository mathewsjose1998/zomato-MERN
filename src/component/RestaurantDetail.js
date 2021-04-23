import React, { Component } from 'react'
import axios from 'axios'
import './RestaurantDetails.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
let cityId=sessionStorage.getItem('cityId')
let mealId
       

 class RestaurantDetail extends Component {
     constructor(props){
         super(props)
         this.state={
             restaurants:''
         }
      }
   
      showRestaurant=(restaurants)=>{
        
        console.log(restaurants)
        if(restaurants){
            return restaurants.map((item)=>{
                sessionStorage.setItem('restname',`${item.name}`)
                return(
                    <div>
                        <h1>{item.name}</h1>
                            <h5 class="wow fadeIn text-secondary my-4">We imagine a world where there’s no such thing as a bad cup of coffee and all coffee farmers live prosperously.</h5>
                           <br/>

                            <Tabs>
                                <TabList>
                                    <Tab><span className="overview">Overview</span></Tab>
                                    <Tab><span className="overview">Contact</span></Tab>
                                </TabList>
                                <TabPanel>
                                    <div>
                                        <div className='about1'>About the place</div>
                                        <br/>
                                        <div className='cusine'>Cuisine</div>
                                        <div>{item.Cuisine.name}</div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <div className='phonenumber'>PhoneNumber</div>
                                        <div><h5>{item.contact_number}</h5></div>
                                        <br/>
                                        <div className='address font-size-20px '><h3>{item.address}</h3></div>
                                    </div>
                                </TabPanel>


                            </Tabs>
                       
                    </div>
                )
            }) 
        }
        

      }

      

    render() {
        return (
            <div>
           
                
            <div className='main'>
                
                
                
            <header id="first">
                    <div class="header-content">
                        <div class="inner">
                        {this.showRestaurant(this.state.restaurants)}
                            <hr/>
                           
                            <Link to={`/details/${mealId}`} class="btn btn-primary btn-lg page-scroll wow fadeInUp mx-2" >Back</Link>
                            <Link to={`/order/${this.props.match.params.id}`} class="btn btn-danger btn-lg page-scroll wow fadeInUp">Place Order</Link>
                        </div>
                    </div>
                </header>
            
            </div>
    
           </div>
        )
    }
    componentDidMount(){
         mealId= sessionStorage.getItem('mealid')
        console.log(mealId)
        let restuarantId=parseInt(this.props.match.params.id)
        let restaurantDetailUrl=`http://localhost:9000/restaurantdetail/${restuarantId}`
        console.log(restaurantDetailUrl)
        axios.get(restaurantDetailUrl).then((response)=>{
          //  console.log(response.data)
            this.setState({restaurants:(response.data)})
           // console.log(this.state.restaurants)
        }).catch((error)=>{
            console.log(error)
        })



    }
}
export default RestaurantDetail