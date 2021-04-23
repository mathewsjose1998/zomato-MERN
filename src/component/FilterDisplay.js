import React, { Component } from 'react'
import axios from 'axios'
import './FilterDisplay.css'


class FilterDisplay extends Component {
    constructor(props){
        super(props)
    this.state={
        mealdata:``,
        cuisineid:[],
        cityid:``,
        mealId:``
    }
    }

    showfilter=(mealtypes)=>{
        
       
        if(mealtypes){
            return mealtypes.map((item)=>{
                return(
                    <div onChange={this.cuisineFilter}>
                        <label className="form-check">
                                <input  type="checkbox" value={item.cuisine} id="checkbox1" name="cuisine"/>
                                . {item.name}
                            </label>
                    </div>
    
                    
                )
            })
        }

    }
 

    cuisineFilter=(event)=>{
        console.log(event.target.value)
       

      
        

    }

    showprops=(mealId)=>{
       // console.log(mealId.mealId)
         this.state.mealId=mealId.mealId;
         //console.log(mealtype)
         this.state.cityid=parseInt(sessionStorage.getItem('cityId'));
      



    }

    render() {
        return (
            <div>

            <div class="filter">
                    <div class="filter-title">Filters</div>
    
                    <div class="cuisine-checkbox">
                        <div class="cuisine-title">Cuisine</div>
                                     {this.showprops(this.props)}
                                  {this.showfilter(this.state.mealdata)}
                         </div>

                    
            </div>


              
            </div>
        )
    }

    componentDidMount(){
        let cuisineUrl=`http://localhost:9000/cusine`
        axios.get(cuisineUrl).then((response)=>{
            console.log(response.data)
            this.setState({mealdata:response.data})
        })
    }
}

export default FilterDisplay
