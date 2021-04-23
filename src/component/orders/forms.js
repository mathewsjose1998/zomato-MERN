import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const order_url='http://localhost:9000/placeOrder'
 class forms extends Component {
     constructor(props){
         super(props)

         this.state={
             order_id: Math.floor(Math.random()*10000),
            
                name: "",
                phone:``,
                email: "",
                address: "",
                rest_name:sessionStorage.getItem('restname') ,
                person: `0`
         }
     }
  handleNameChange=(event)=>{
      this.state.name=event.target.value;

  }
  handlePhoneChange=(event)=>{
    this.state.phone=event.target.value;

}
handleEmailChange=(event)=>{
    this.state.email=event.target.value;

}
handleAddressChange=(event)=>{
    this.state.address=event.target.value;

}
handlePersonChange=(event)=>{
    this.state.person=event.target.value;
}

handleSubmit=()=>{
    let data={
        
    
        "order_id": this.state.order_id,
        "name": this.state.name,
        "phone": this.state.phone,
        "email": this.state.email,
        "address": this.state.address,
        "rest_name": this.state.rest_name,
        "person": this.state.person
    
    }
    sessionStorage.setItem('orderid',this.state.order_id)
    alert('order placed');
    fetch(order_url,{
        method:'POST',
        headers:{
            'Accept':'application/json',//return
            'Content-Type':'application/json'//sending
        },
        body:JSON.stringify(data)
    }).then((this.props.history.push('/orderdisplay')))
}

    render() {
        return (
            <div className="container bg-secondary">
                            <div className="panel panel-success">
                                    <div className="panel-heading">
                                        <h3>Place Order</h3>
                                    </div>
                                <div className="panel-body">
                                <div class="form-group col-md-6">
                                            <label className="control-label">Order_id:</label>
                                            <input type="text" className="form-control" value={this.state.order_id} readOnly name="order_id" placeholder="Order id"/>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label className="control-label">rest_name:</label>
                                            <input type="text" className="form-control" value={this.state.rest_name} readOnly name="rest_name"/>
                                        </div>


                                        <div class="form-group col-md-6">
                                            <label className="control-label">Name</label>
                                            <input type="text" className="form-control" required id="inputname"name="name" placeholder="Name" onChange={this.handleNameChange}/>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Phone</label>
                                            <input type="number" class="form-control" id="inputphone" required placeholder="Phone" onChange={this.handlePhoneChange}/>
                                        </div>

                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputemail" placeholder="Email" required onChange={this.handleEmailChange}/>
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.handleAddressChange}/>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Person</label>
                                        <select name="person" className="form-control" onChange={this.handlePersonChange} >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                

                                </div>
                            </div>

                            <button className="btn btn-info " onClick={this.handleSubmit}>submit</button>
                            <Link to="/"><button className="btn btn-danger" >cancel</button></Link>
             </div>
                
            
        )
    }
}

export default forms
