import React from 'react'
import './Detailsdisplay.css'
import {Link} from 'react-router-dom'
import FilterDisplay from './FilterDisplay'

 const DetailsDisplay = (props) => {

   const showRestaurantList=({restuarants})=>{
        console.log(restuarants)
        if(restuarants.length>0){
            return restuarants.map((item)=>{
                
                return(
                    <Link to={`/restaurantdetail/${item._id}`}style={{ textDecoration: 'none' }} >
                    <div className="restuarant">
                    <div className="top-container">
                        <div class="image-container1">
                            <img src="https://images.all-free-download.com/images/graphicthumb/delicious_food_04_hd_pictures_167550.jpg" alt="rest img"/>
                        </div>
                        <div className="restdetails-container">
                            <div className="rest-name">{item.name} </div>
                            <div className="rest-address">{item.locality}</div>
                            
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="cuisineinfo-container">
                            <div className="cuisine">Cuisine:</div>
                            <div className="cuisine-name">{item.Cuisine[0].name}, {item.Cuisine[1].name}</div>
                        </div>
                        <div className="cuisineinfo-container">
                            <div className="cuisine">Mealtype:</div>
                            <div className="cuisine-name">{item.type[0].name}, {item.type[1].name}</div>
                        </div>
                        <div className="costinfo-container">
                            <div className="costof">Cost for Two:</div>
                            <div className="costindollor">{item.cost}</div>
                        </div>
                    </div>
                    
                </div>
                </Link>
                )

                  
              })
        }
        else{
            return(
                <h2>no stores found</h2>
            )
        }
     
    }

 

    return (
        <div>

            <div class="container1">
                <div>
                
                </div>
                    
            
                    <div class="main">
                        
                        
                    </div>
                </div>
            
            <div className="row">
                <div className="col-md-1">
               
              
                </div>
                
                <div className="col-md-10">
                {showRestaurantList(props)}
                
                </div>
                
                
                
            </div>

            
        </div>
    )
}

export default  DetailsDisplay 

