import React, {Component } from 'react'
import axios from 'axios'
 class CostFilter extends Component {



    costFilters=(event)=>{
    
        let cost= (event.target.value).split(',')
        let mealtypeId=this.props.mealid;
        let cityId=this.props.cityid;
        console.log(cityId);
        let lcost=cost[0]
        let hcost=cost[1]
        let Url;
       if(event.target.value){
        Url=`http://localhost:9000/restaurantlist/${cityId}/${mealtypeId}?lcost=${lcost}&hcost=${hcost}`
       }
       else{
           Url=`http://localhost:9000/restaurantlist/${cityId}/${mealtypeId}`
       }
    
        axios.get(Url).then((response)=>{
                
            //   console.log(response.data)
               this.props.restpercost(response.data)
             
               
           }).catch((error)=>{
               console.log(error)
           })
 }

    render() {
        return (
            <React.Fragment>
               
                                <div class="cost-title1">Cost For Two filtercity</div>

                                <div onChange={this.costFilters}>
                                    
                                    <label className="form-check">
                                       <input  type="radio" value="" id="checkbox1" name="range"/>
                                        . All
                                    </label>

                               </div> 

                                <div onChange={this.costFilters}>
                                        <label className="form-check">
                                            <input  type="radio" value="0,500" id="checkbox1" name="range"/>
                                        . 0-500
                                        </label>

                                </div>
                                <div onChange={this.costFilters}>
                                        <label className="form-check">
                                            <input  type="radio" value="500,1000" id="checkbox1" name="range"/>
                                            . 500-1000
                                        </label>
                                        
                                </div>

             </React.Fragment>
        
        )
    }
}

export default CostFilter
