import React, { Component } from 'react';
import "./form.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UserForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
      first_name:'',
      last_name:'',
      email:'',
      number:'',
      home_address:'',
      job_role:'',
      salary:''

    }
  }


  handleChange= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })

  }

  handleSubmit= (event) => {
    
    event.preventDefault()
    this.props.AddUser(this.state)
    this.setState({
      first_name:'',
      last_name:'',
      email:'',
      number:'',
      home_address:'',
      job_role:'',
      salary:''
    })
  }

  
    render() {
        return (
            <>

                <Form className = "p-3" onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Label className = "label">First Name</Form.Label>
                  <Form.Control type="text" name = "first_name" placeholder="Enter your First Name" required = "required" value={this.state.first_name} onChange={this.handleChange}/>

                  <br />

                  <Form.Label className = "label">Last Name</Form.Label>
                  <Form.Control type="text" name = "last_name" placeholder="Enter your Last Name" required = "required" value={this.state.last_name} onChange={this.handleChange}/>
                 
                  <br />
                
                  <Form.Label className = "label">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name = "email" required = "required" value={this.state.email} onChange={this.handleChange}/>

                  <br />

                  <Form.Label className = "label">Phone Number</Form.Label>
                  <Form.Control type="number" name = "number" placeholder="Enter your Phone" required = "required" value={this.state.number} onChange={this.handleChange}/>

                  <br />

                  <Form.Label className = "label">Home Address </Form.Label>
                  <Form.Control type="text" name = "home_address" placeholder="Enter your Home Address" required = "required" value={this.state.home_address} onChange={this.handleChange}/>

                  <br />

                  <Form.Label className = "label">Job role</Form.Label>
                  <Form.Control type="text" name = "job_role" placeholder="Enter your Job Role" required = "required"  value={this.state.job_role} onChange={this.handleChange}/>

                  <br />


                  <Form.Label className = "label">Current Salary</Form.Label>
                  <Form.Control type="number" name = "salary" placeholder="Enter your Salary" required = "required" value={this.state.salary} onChange={this.handleChange}/>



                </Form.Group>
              
              
              
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </>
        );
    }
}

export default UserForm;

