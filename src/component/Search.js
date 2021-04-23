import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Search.css'
let locurl='http://localhost:9000/location'




class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"edurekaa internshipppp",
           
            city:'',
            location:``,
            restaurant:``
        }
    }
 setlocation=(locations)=>{
     
     console.log(locations)
     if(locations){
         return locations.map((location)=>{
             return(
                
                  <option value={location.city}>{location.name}</option>
             )
                 })
         
          }
     }

 handleCity=(event)=>{
     this.setState({restaurant:''})
        this.setState({city:event.target.value})
        sessionStorage.setItem('cityId',event.target.value)
       // console.log(event.target.value)
       this.state.restaurant=``
       let restaurantHomeUrl=`http://localhost:9000/restauranthome?city=${parseInt(event.target.value)}`
       fetch(restaurantHomeUrl ,{
           method:'GET'
       }).then((response)=>{
            if(response.status==200){
               return response.json();
           }
           else  console.log("error");
             }).then((data)=>{
           console.log(data)
          this.setState({restaurant:data})
           })
    }



showrestaurant=(restaurants)=>{
    console.log(restaurants)
   
    if(restaurants){
      //  document.getElementById('restuarantlist').value=''
        return restaurants.map((restaurant)=>{
            return(
                  
                      <option value={restaurant._id} >{restaurant.name} !{restaurant.locality}</option>
                      
                   
            )
          })
      
    }

 
    

    
}
    displayrestaurants=(event)=>{
        console.log(event.target.value)
      
            let url=`/restaurantdetail/${event.target.value}`
            console.log(this.props)
           // this.props.history.push(url)
           this.props.restid(event.target.value)
        
    }

    render(){   //cllass do not return ,render will return 
        return(
            <div className="container1">
              <div className="image-container ">
                <div class="navigation">
                    <span class="nav1">Get the App</span>
                    <span class="nav2">Login</span>
                    <span class="nav3">Signup</span>
                </div>
    
                <div class="main-container">
                    
                    <div className="logo1">zomato</div>
                    <div className="description">Discover the best food  near you</div>
    
                    <div class="search-container">
                        
                        <div class="locationselector">
                            <div class="marker">
                                <span className="fa fa-map-marker "></span>
                            </div>
                            <div class="loctn-dropdown">
                                <select name="" id="" class="locationselect-dropdown" onChange={this.handleCity}>
                                {this.setlocation(this.state.location)}
                                </select>
                            </div>
                            
                        </div>
                        <div class="restaurant-selector">
                            <div class="Search">
                                <span class="fa fa-search "></span>
                            </div>
                            <div class="restuarant-dropdown">
                                {/* <input  id="restuarantlist" list="rests" name="rests" placeholder="Search for Restaurants" /> */}
                                <select id="restuarantlist" onChange={this.displayrestaurants}>
                                {this.showrestaurant(this.state.restaurant)}
                                </select>
                              
                            </div>
                        </div>
                       
                        
                    </div>
                    
                </div>
    
            </div>
    
        </div>
        )
    }

    componentDidMount(){  //API call on page load

        fetch(locurl ,{
            method:'GET'
        }).then((response)=>{
            
            if(response.status==200){
                return response.json();
            }
            else{
                console.log("error");
            }
    
        }).then((data)=>{
           // console.log(data)
           this.setState({location:data})
          
        })

   }
    
}



export default Search;