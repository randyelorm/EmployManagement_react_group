
import Navbar from "./Components/NAVBAR/Navbar"
import UserList from "./Components/USERLIST/UserList"
import UserForm from "./Components/USERFORM/UserForm"

import React, { Component } from 'react';

class App extends Component {

    constructor(props){
      super(props)

      this.state = {
          users: [
            {
              first_name: "Yoshi", 
              last_name: "Odei",
              email: "yoshi@email.com",
              number: 244020304 ,
              home_address: "codetrainHUb",
              job_role: "Developer",
              salary: 7000
            },
            
            
            
          ]
      }
    }
    
    handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();  
    this.setState({users:[...this.state.users,newUser]})
    }

    deleteUser = (id) => {
      let notDeletedUsers = this.state.users.filter(user => user.id !== id);
      this.setState({users: notDeletedUsers});
    }

    editUser = (id, updatedUser)=> {
        this.setState({
          users: this.state.users.map(
              (user)=> {
              return  user.id === id ? updatedUser : user
              }
          )
        })
    }


  render() {
    return (
      <div className = "container">
        <Navbar/>
        <br/>
      <div className = 'col-sm-4 offset-sm-4'> <UserForm AddUser={this.handleAddUser
      }/> </div> 
        <UserList users={this.state.users} deleteUser={this.deleteUser} editUser = {this.editUser}/>
       
      </div>
    );
  }
}

export default App;
