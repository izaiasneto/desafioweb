import React, { Component } from 'react';
import axios from 'axios'


class AddUsers extends Component {
  
    state = {
      
      name: '',
      image: '',
      email: '',
      cell: '',
    }
  

  handleSubmit = event => {
      event.preventDefault();
     
      axios.post('http://localhost:4000/users', { 
        name: this.state.name,
        avatarUrl: this.state.image,
        email: this.state.email,
        cell: this.state.cell,
        
      })
           .then(res=>{
            console.log(res);
            console.log(res.data);
           })
  }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
            
        })
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
            
        })
    }
    handleCellChange = event => {
        this.setState({
            cell: event.target.value
            
        })
    }
    handleImageChange = event => {
        this.setState({
            image: event.target.value
            
        })
    }

 
    

  

  render() {

    return (
        
        <form onSubmit = { this.handleSubmit }>
        <div class="form-group">
          <label for="exampleFormControlInput1">  Name: </label>
          <input type = "text" 
                  name = "name"
                  class="form-control" onChange= {this.handleNameChange}/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1"> Email: </label>
            <input type = "text" 
                  name = "email" 
                  class="form-control"
                  placeholder="name@example.com"
                  onChange= {this.handleEmailChange}/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1"> Cell: </label>
            <input type = "text" 
                  name = "cell" 
                  class="form-control"
                  onChange= {this.handleCellChange}/>
        </div>
       <div class="form-group">
          <label for="exampleFormControlInput1"> Image Url: </label>
            <input type = "text" 
                  name = "image"
                  class="form-control" 
                  onChange= {this.handleImageChange}/>
        
       </div>
        <button type = "submit" class="btn btn-info btn-lg btn-block" onClick> Cadastrar </button>
        
      </form>
    );
  }
}

export default AddUsers;





    