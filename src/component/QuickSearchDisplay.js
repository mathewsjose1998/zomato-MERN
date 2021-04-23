import React from 'react'
import {Link} from 'react-router-dom'
import Details from './Details'
import './QuickSearchDisplay.css'


function QuickSearchDisplay(props) {


const showmeal=({mealdata})=>{
   // console.log(meals)
   //<Link to={`${item.name}`}>{item.name}</Link>   

   if(mealdata){
            console.log(mealdata)
         return   mealdata.map((item)=>{
               return(
                        <Link to={`/details/${item.mealtype}`}  style={{ textDecoration: 'none' }}>
                                    <div className=" title-container  ">
                                            <div className="component-image">
                                                <img src={`./images/${item.name}.jpg`} alt="foodd"  />
                                            </div>
                                            <div className="component-details">
                                                <div className="component-heading">{item.name}</div>
                                                <div className="component-description">Start your day with exclusive {item.name} options with us</div>
                                            </div>
                                     </div>
                        </Link>   
                
               ) 
            })

   }

}


    return (
        
                          
    <div className="container1">
        
        <div className="quicksearch-heading">
            <h1></h1>
        </div>
    
        <div className="row quicksearch-container">
            
                
                 {showmeal(props)}
         </div>
 </div>

    )
}

export default QuickSearchDisplay
