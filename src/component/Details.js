import React, { Component } from 'react'
import axios from 'axios'

import './Details.css'
import {Link} from 'react-router-dom'
import CostFilter from './filter/CostFilter'
import SortFilter from './filter/SortFilter'
import DetailsDisplay from './DetailsDisplay'
import Footer from './Footer'

class Details extends Component {
    constructor(props){
        super(props)
        this.state={
            cityId:parseInt(sessionStorage.getItem('cityId'))?parseInt(sessionStorage.getItem('cityId')):1,
            mealtypeId:parseInt(this.props.match.params.id),
            restuarantList:[],
            mealdata:``
        }
    }
    
cuisineFilter=(event)=>{
    console.log(event.target.value)
    let cuisineid=event.target.value;
    let restuarantListUrl;
    if(cuisineid){
    restuarantListUrl=`http://localhost:9000/restaurantlist/${this.state.cityId}/${this.state.mealtypeId}?cuisine=${cuisineid}`
    }
    else{
        restuarantListUrl=`http://localhost:9000/restaurantlist/${this.state.cityId}/${this.state.mealtypeId}`
    }
    axios.get(restuarantListUrl).then((response)=>{
            
        //   console.log(response.data)
           this.setState({restuarantList:response.data})
           console.log(this.state.restuarantList)
           
           
       }).catch((error)=>{
           console.log(error)
       })

}





   setfilter=(mealtypes)=>{
       if(mealtypes){
        return mealtypes.map((item)=>{
            return(
                <div onChange={this.cuisineFilter}>
                    <label className="form-check">
                            <input  type="radio" value={item.cuisine} id="checkbox1" name="cuisine"/>
                            . {item.name}
                        </label>
                </div>

                
            )
        })
       }
       

   }
    
   setdataPerCost=(data)=>{
    this.setState({restuarantList:data})
   }
setdataPerSort=(data)=>{
    this.setState({restuarantList:data})
}
    render() {
        
        return (
            <div>
                <div className="row">

                        <div class="col-md-12 header">
                        <div class="logo">  <Link to='/' style={{ textDecoration: 'none', color:'white' }}> zomato</Link></div>
                                <div class="loginandsignup">
                                    <div class="login">Login</div>
                                    <div class="create">
                                        <div>Create an account</div>
                                    </div>
                                </div>
                        </div>
                    
                            

                </div>
            <div className="row">
                <div className="col-md-3 px-4">
                  
                <div class="filter1">
                                <div class="filter-title1">Filters</div>
                
                                <div class="cuisine-checkbox">
                                    <div class="cuisine-title1">Cuisine</div>
                                    <div onChange={this.cuisineFilter}>
                                        
                                            <label className="form-check">
                                                <input  type="radio" value="" id="checkbox1" name="cuisine"/>
                                                . All
                                            </label>

                                    </div>

                                        {this.setfilter(this.state.mealdata)}
                                </div>
                                    <div className="cost-checkbox">
                                        
                                    <CostFilter restpercost={(data)=>{this.setdataPerCost(data)}} cityid={this.state.cityId} mealid={this.state.mealtypeId}/>
                                    </div>
                                  

                                    <div class="sort-checkbox">
                                       <SortFilter restsort={(data)=>{this.setdataPerSort(data)}}  cityid={this.state.cityId} mealid={this.state.mealtypeId}/>     
                                
                                        </div>
                                    

                </div>


                  
                    
             </div>
             <div className="col-md-9">
             <DetailsDisplay restuarants={this.state.restuarantList}  />
             </div>
            
            
            </div>

           <Footer/>

        </div>
        )
    }

    componentDidMount(){
        sessionStorage.setItem('mealid',this.state.mealtypeId)
       
       let restuarantListUrl=`http://localhost:9000/restaurantlist/${this.state.cityId}/${this.state.mealtypeId}`
       console.log(restuarantListUrl)

        axios.get(restuarantListUrl).then((response)=>{
            
         //   console.log(response.data)
            this.setState({restuarantList:response.data})
            console.log(this.state.restuarantList)
            
            
        }).catch((error)=>{
            console.log(error)
        })


        let cuisineUrl=`http://localhost:9000/cusine`
        axios.get(cuisineUrl).then((response)=>{
            console.log(response.data)
            this.setState({mealdata:response.data})
        })

    }
            
            
    
}

export default Details;