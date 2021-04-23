import React,{Component} from 'react'
import QuickSearchDisplay from './QuickSearchDisplay'

const quickUrl=`http://localhost:9000/mealtype`

class QuickSearch extends Component{

    constructor(){
        super()
        this.state={
            mealtype:``
        }
    }

    setmealtype=(meals)=>{
        if(meals){
            return meals.map((meal)=>{
                return(
                    <h4>{meal.name}</h4>
                )
            })
        }

    }


    render(){
        return(
            <div>
               <QuickSearchDisplay mealdata={this.state.mealtype}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(quickUrl ,{
            method:'GET'
        }).then((response)=>{
            
            if(response.status==200){
                return response.json();
            }
            else{
                console.log("error");
            }
       }).then((data)=>{
            console.log(data)
            this.setState({mealtype:data})
           
           })
    }
    
}

export default QuickSearch;