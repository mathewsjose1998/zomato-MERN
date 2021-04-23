import axios from 'axios'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class OrderDisplay extends Component {
     constructor(){
         super()
        this.state={
            order:``
        }

     }

    orderdisplay=(orders)=>{
let orderid=sessionStorage.getItem('orderid')
console.log(orderid)
        if(orders){

           return orders.map((item)=>{

               if(item._id==orderid){
                   console.log(item)
                   return(
                       <div className="bg-info">
                     
                       <h3 class="text-uppercase text-danger px-2 py-2">{item.rest_name}</h3>
                       <div class="px-5 py-5">
                       <h3 class="text-uppercase">{item.name},</h3>
                       <h6 class="text-lowercase px-4">{item.address},</h6> <h6 class="text-lowercase px-4">{item.email},</h6>
                       <h6 class="text-lowercase px-4">{item.phone}</h6>

                       

                       <h4 class="mt-5 theme-color mb-5 text-dark">Thanks for your order!</h4> <span class="theme-color">Payment Summary</span>
                       <div class="mb-3">
                           <hr class="new1"/>
                       </div>
                       <div class="d-flex justify-content-between"> <span class="font-weight-bold">Ether Chair(Qty:1)</span> <span class="text-muted">$1750.00</span> </div>
                       <div class="d-flex justify-content-between"> <small>Shipping</small> <small>$175.00</small> </div>
                       <div class="d-flex justify-content-between"> <small>Tax</small> <small>$200.00</small> </div>
                       <div class="d-flex justify-content-between mt-3"> <span class="font-weight-bold">Total</span> <span class="font-weight-bold theme-color">$2125.00</span> </div>
                       <div class="text-center mt-5"> <button class="btn btn-primary">Track your order</button> </div>
                   </div>
                </div>
                   )

               }
            })
        }


    }
    
    render() {
        return (
            <div className="container ">
            <div className="d-flex justify-content-center aling-items-center my-5 ">
                                    <h3>Order Details</h3>
                                    


                                    <button type="button" class="btn btn-primary launch mx-4  " data-toggle="modal" data-target="#staticBackdrop"> <i class="fa fa-info"></i> Get Order details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body ">
                                    <div class="text-right"> <i class="fa fa-close close" data-dismiss="modal"></i> </div>
                                    <div class="px-4 py-5 ">
                                        <div className="d-flex justify-content-center "> {this.orderdisplay(this.state.order)}</div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

               <Link to="/"><button className="btn btn-danger"> Go home</button></Link> 

              
            </div>
        </div>
            
        )
    }
    componentDidMount=()=>{
        let url='http://localhost:9000/getOrder'
        axios.get(url).then((response)=>{
            
            this.setState({order:(response.data)})
        })
    }
}

export default OrderDisplay
