import React, { Component } from 'react'
import axios from 'axios'

class SortFilter extends Component {
    
    sortFilter=(event)=>{
        console.log(parseInt(event.target.value))
        let sort=parseInt(event.target.value);
        let mealtypeId=this.props.mealid;
        let cityId=this.props.cityid;
    let Url
        if(event.target.value){
            Url=`http://localhost:9000/restaurantlist/${cityId}/${mealtypeId}?sort=${sort}`
        }
        else{
            Url=`http://localhost:9000/restaurantlist/${cityId}/${mealtypeId}`
        }
        axios.get(Url).then((response)=>{
                
            //   console.log(response.data)
               this.props.restsort(response.data)
               
               
           }).catch((error)=>{
               console.log(error)
           })
    
    
        
    }

    render() {
        return (
            <div>
                <div class="sort-title1">Sort filter</div>
                        <div onChange={this.sortFilter}>
                                <label className="form-check">
                                    <input  type="radio" value="" id="checkbox1" name="sort"/>
                                    . Price low to High
                                </label>
                                
                        </div>
                        <div onChange={this.sortFilter}>
                                <label className="form-check">
                                    <input  type="radio" value="-1" id="checkbox1" name="sort"/>
                                    . Price High to Low
                                </label>
                                
                        </div>
                    
            </div>
        )
    }
}

export default SortFilter
